var gulp = require('gulp'),
  watch = require('gulp-watch'),
  run = require('gulp-run'),
  sourcemaps = require('gulp-sourcemaps'),
  rename = require('gulp-rename'),
  mochify = require('mochify'),
  babel = require('gulp-babel');

gulp.task('babel', function() {
  return gulp.src('**/*.es6')
    .pipe(sourcemaps.init())
    .pipe(babel({
	stage: 0
    }))
    .pipe(sourcemaps.write())
    .pipe(rename({
      extname: '.js'
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('test', ['babel'], function() {
  mochify('./test.js', {
    reporter: 'tap'
  }).bundle();
});

gulp.task('default', ['test'], function() {
  gulp.watch('**/*.es6', ['test']);
});
