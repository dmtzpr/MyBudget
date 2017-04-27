var lib = process.cwd() + '/lib/',
    config = require(lib + 'config'),
    log = require(lib + 'log')(module),
    app = require(lib + 'app');

var port = config.get('port');

app.listen(port, function () {
    log.info('My Budget Server URL is http://localhost:' + port);
});