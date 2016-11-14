var gulp = require('gulp'),
    del = require('del'),
    settings = require('../../gulpVariables.json');

gulp.task('clean', function (cb) {
    return del(settings.outputPath, cb);
});