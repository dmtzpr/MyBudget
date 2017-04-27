var express = require('express'),
    router = express.Router();

var libs = process.cwd() + '/lib/',
    log = require(libs + 'log')(module),
    Budget = require(libs + 'models/budget');

router.get('/', function (req, res) {
    Budget.findOne({userId: req.query['userId']}, function (err, budget) {
        if (!err) {
            return res.status(200).send({
                monthBudget: budget ? budget.monthBudget : 0
            });
        } else {
            res.statusCode = 500;

            log.error('Internal error(%d): %s', res.statusCode, err.message);

            return res.json({
                error: 'Server error'
            });
        }
    });
});

router.post('/', function (req, res) {
    var userId = req.body.userId;

    Budget.findOne({userId: userId}, function (err, budget) {
        if (!budget) {
            log.error('Budget with user id: %s Not Found', userId);
            res.status(404).send({
                success: false,
                message: 'Not found'
            });
        }

        budget.monthBudget = req.body.monthBudget;
        budget.description = req.body.description;

        budget.save(function (err) {
            if (!err) {
                log.info("Budget with user id: %s updated", budget.id);
                return res.status(200).send({
                    success: true,
                    budget: budget
                });
            } else {
                log.error('Internal error(%d): %s', res.statusCode, err.message);
                if (err.name === 'ValidationError') {
                    res.status(400).send({
                        success: false,
                        message: 'Validation error'
                    });
                } else {
                    res.status(500).send({
                        success: false,
                        message: 'Server error'
                    });
                }
            }
        });
    });
});

router.put('/', function (req, res) {
    var budget = new Budget({
        monthBudget: req.body.monthBudget,
        userId: req.body.userId,
        description: req.body.description
    });

    budget.save(function (err) {
        if (!err) {
            log.info("New budget created with id: %s", budget.id);
            return res.status(200).send({
                success: true,
                budget: budget
            });
        } else {
            log.error('Internal error(%d): %s', res.statusCode, err.message);
            if (err.name === 'ValidationError') {
                res.status(400).send({
                    success: false,
                    message: 'Validation error'
                });
            } else {
                res.status(500).send({
                    success: false,
                    message: 'Server error'
                });
            }
        }
    });
});


module.exports = router;







