var browserSync, gulp, reload;

gulp = require('gulp');

browserSync = require('browser-sync');

reload = browserSync.reload;

gulp.task('html', function() {
  return gulp.src('./app/html/*.html').pipe(gulp.dest('./build')).pipe(reload({
    stream: true
  }));
});