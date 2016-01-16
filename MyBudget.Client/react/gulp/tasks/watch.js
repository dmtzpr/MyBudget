var gulp;

gulp = require('gulp');

gulp.task('watch', ['browserSync'], function() {
  gulp.watch('app/html/*.html', ['html']);
  return gulp.watch('app/stylesheets/*.less', ['less']);
});

gulp.task('setWatch', function() {
  return global.isWatching = true;
});