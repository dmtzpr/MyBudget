var express = require('express'),
    router = express.Router(),
    config = require('../config');

router.get('/', function (req, res) {
    res.send('Hello! The API is at http://localhost:' + config.get('port') + '/api');
});

module.exports = router;
