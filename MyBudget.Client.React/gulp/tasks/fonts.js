var gulp = require('gulp'),
    settings = require('../../gulpVariables.json');

gulp.task('fonts', function () {
    return gulp.src(settings.sources.fontPaths).pipe(gulp.dest(settings.fontOutputPath));
});