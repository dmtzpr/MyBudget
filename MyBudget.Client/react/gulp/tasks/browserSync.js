var browserSync, gulp;

gulp = require('gulp');

browserSync = require('browser-sync');

gulp.task('browserSync', function() {
  return browserSync({
    port: 9000,
    open: false,
    server: {
      baseDir: ['./build', './app']
    },
    files: ['./build/**']
  });
});