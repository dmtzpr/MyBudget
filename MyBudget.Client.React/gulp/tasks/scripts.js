var gulp = require('gulp'),
    browserify = require('browserify'),
    reactify = require('reactify'),
    source = require("vinyl-source-stream"),
    settings = require('../../gulpVariables.json');

gulp.task('scripts', function () {
    var b = browserify();
    b.transform(reactify);
    b.add(settings.sources.jsPaths);
    return b.bundle()
        .pipe(source('script.js'))
        .pipe(gulp.dest(settings.jsOutputPath));
});