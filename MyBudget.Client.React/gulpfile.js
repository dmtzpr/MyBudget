var gulp = require('gulp'),
    requireDir = require('require-dir'),
    runSequence = require('run-sequence');

requireDir('./gulp/tasks', {
    recurse: true
});

gulp.task('default', ['server']);

gulp.task('build', ['clean'], function (cb) {
    return runSequence(['scripts', 'html', 'less', 'img', 'fonts'], cb);
});

gulp.task('server', ['build'], function () {
    return gulp.start('webserver');
});