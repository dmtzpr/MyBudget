var express = require('express'),
    router = express.Router();

var lib = process.cwd() + '/lib/',
    log = require(lib + 'log')(module),
    DateParser = require(lib + 'utils/date-parser'),
    Card = require(lib + 'models/card');


router.get('/', function (req, res) {
    Card.find({userId: req.query['userId']}, function (err, cards) {
        if (err) {
            log.error('Internal error(%d): %s', res.statusCode, err.message);

            return res.status(500).send({
                error: 'Server error'
            });
        } else {
            return res.status(200).send({
                cards: cards
            });
        }
    });
});

router.post('/', function (req, res) {
    var cash = new Card({
        userId: req.body.userId,
        balance: req.body.amount,
        note: req.body.note,
        date: DateParser.parse(req.body.date)
    });

    cash.save(function (err) {
        if (!err) {
            log.info('New cash created with id: %s', cash.id);
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

router.put('/:id', function (req, res) {
    Card.findById(req.params.id, function (err, card) {
        if (!card) {
            log.error('Card with user id: %s Not Found', req.params.id);
            res.status(404).send({
                success: false,
                message: 'Not found'
            });
        }

        card.name = req.body.name;
        card.balance = req.body.balance;

        card.save(function (err) {
            if (!err) {
                log.info('Card with id: %s updated', card.id);
                return res.status(200).send({
                    success: true,
                    card: card
                });
            } else {
                log.error('Internal error (%d): %s', res.statusCode, err.message);
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

router.delete('/:id', function (req, res) {
    Card.findByIdAndRemove(req.params.id, function (err, card) {
        if (!err) {
            log.info('Card with id: %s removed', card.id);
            return res.status(200).send({
                success: true
            });
        } else {
            log.error('Internal error (%d): %s', res.statusCode, err.message);
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







