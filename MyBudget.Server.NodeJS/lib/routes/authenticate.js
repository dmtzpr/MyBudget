var express = require('express'),
    router = express.Router(),
    jwt = require('jsonwebtoken');

var lib = process.cwd() + '/lib/',
    config = require(lib + 'config'),
    log = require(lib + 'log')(module),
    User = require(lib + 'models/user');

function addResponseHeaders(res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
}

router.post('/authenticate', function (req, res) {
    addResponseHeaders(res);

    User.findOne({
        login: req.body.login
    }, function (err, user) {
        if (err) {
            log.error('Internal error(%d): %s', res.statusCode, err.message);

            return res.status(500).send({
                error: 'Server error'
            });
        } else {
            if (!user) {
                res.status(401).send({success: false, message: 'Authentication failed. User not found.'});
            } else if (user) {
                if (user.password != req.body.password) {
                    res.status(401).send(({success: false, message: 'Authentication failed. Wrong password.'}));
                } else {
                    var token = jwt.sign(user, config.get('security:privateKey'), {
                        expiresIn: config.get('security:tokenLife')
                    });
                    res.status(200).send({
                        success: true,
                        message: 'Enjoy your token!',
                        user: {
                            name: user.name,
                            token: token,
                            id: user.id
                        }
                    });
                }
            }
        }
    });
});

router.get('/logout', function (req, res) {
    addResponseHeaders(res);
    res.status(200).send({
        success: true,
        message: 'User is logged out'
    });
});

router.use(function (req, res, next) {
    addResponseHeaders(res);

    var token = req.body.token || req.query['token'];

    if (token) {
        jwt.verify(token, config.get('security:privateKey'), function (err, decoded) {
            if (err) {
                return res.json({success: false, message: 'Failed to authenticate token.'});
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });
    }
});


module.exports = router;