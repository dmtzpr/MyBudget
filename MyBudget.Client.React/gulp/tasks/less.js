var gulp = require('gulp'),
    less = require('gulp-less'),
    settings = require('../../gulpVariables.json'),
    concat = require('gulp-concat');

gulp.task('less', function () {
    return gulp.src(settings.sources.lessPaths).pipe(less()).pipe(concat('style.css')).pipe(gulp.dest(settings.cssOutputPath));
});