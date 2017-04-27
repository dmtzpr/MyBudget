var mongoose = require('mongoose');

var lib = process.cwd() + '/lib/',
    config = require(lib + 'config'),
    log = require(lib + 'log')(module);

mongoose.connect(config.get('mongoose:uri'));

var db = mongoose.connection;

db.on('error', function (err) {
    log.error('Connection error:', err.message);
});

db.once('open', function callback() {
    log.info("Connected to DB!");
});

module.exports = mongoose;