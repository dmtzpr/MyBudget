var gulp = require('gulp'),
    settings = require('../../gulpVariables.json');

gulp.task('img', function () {
    return gulp.src(settings.sources.imgPaths).pipe(gulp.dest(settings.imgOutputPath));
});