var gutil, prettyHrtime, startTime;

gutil = require('gulp-util');

prettyHrtime = require('pretty-hrtime');

startTime = null;

module.exports = {
    start: function (filepath) {
        startTime = process.hrtime();
        return gutil.log('Bundling', gutil.colors.green(filepath) + '...');
    },
    end: function (filepath) {
        var prettyTime, taskTime;
        taskTime = process.hrtime(startTime);
        prettyTime = prettyHrtime(taskTime);
        return gutil.log('Bundled', gutil.colors.green(filepath), 'in', gutil.colors.magenta(prettyTime));
    }
};