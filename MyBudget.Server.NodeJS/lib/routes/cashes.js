var express = require('express'),
    router = express.Router();

var lib = process.cwd() + '/lib/',
    log = require(lib + 'log')(module),
    DateParser = require(lib + 'utils/date-parser'),
    Cash = require(lib + 'models/cash');

router.get('/', function (req, res) {
    Cash.find({userId: req.query['userId']}, function (err, cashes) {
        if (!err) {
            return res.status(200).send({
                cashes: cashes
            });
        } else {
            log.error('Internal error(%d): %s', res.statusCode, err.message);

            return res.status(500).send({
                error: 'Server error'
            });
        }
    });
});

router.post('/', function (req, res) {
    var cash = new Cash({
        userId: req.body.userId,
        amount: req.body.amount,
        note: req.body.note,
        date: DateParser.parse(req.body.date)
    });

    cash.save(function (err) {
        if (!err) {
            log.info("New cash created with id: %s", cash.id);
            return res.status(200).send({
                success: true,
                cash: cash
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







