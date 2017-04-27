var express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan');

var lib = process.cwd() + '/lib/',
    config = require(lib + 'config'),
    db = require(lib + 'db/mongoose'),
    log = require(lib + 'log')(module);

var base = require(lib + 'routes/base'),
    budgets = require(lib + 'routes/budgets'),
    cashes = require(lib + 'routes/cashes'),
    cards = require(lib + 'routes/cards'),
    authenticate = require(lib + 'routes/authenticate');

var app = express(),
    port = config.get('port');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/', base);
app.use('/api/', authenticate);
app.use('/api/budgets', budgets);
app.use('/api/cashes', cashes);
app.use('/api/cashes', cards);

app.use(function (req, res) {
    log.debug('%s %d %s', req.method, res.statusCode, req.url);
    res.status(404).json({
        message: 'Not found'
    });
    return;
});

app.use(function (err, req, res) {
    log.error('%s %d %s', req.method, res.statusCode, err.message);
    res.status(err.status || 500).json({
        message: err.message
    });
    return;
});

module.exports = app;