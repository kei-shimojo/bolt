var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');

gulp.task('sass', function() {
  return gulp.src(['./src/sass/**/*.scss'])
    .pipe(plumber({
      errorHandler: function(err) {
        console.log(err.messageFormatted);
        this.emit('end');
      }
    }))
    .pipe(sass())
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('default', ['sass'], function() {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
});
