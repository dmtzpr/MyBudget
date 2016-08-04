var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    settings = require('../../gulpVariables.json');

gulp.task('webserver', function () {
    gulp.src(settings.outputPath)
        .pipe(webserver({
            fallback: 'index.html',
            open: true
        }));
});
