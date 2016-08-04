var gulp = require('gulp'),
    settings = require('../../gulpVariables.json');

gulp.task('html', function () {
    return gulp.src(settings.sources.htmlPaths).pipe(gulp.dest(settings.outputPath));
});