'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');

const source = './resources';
const destiny = './assets';

function scss(){
  return gulp.src(source + '/style.scss')
    .pipe(sass({outputStyle: 'compressed',includePaths: ['./resources']}).on('error', sass.logError))
    .pipe(plumber())
    .pipe(gulp.dest(destiny));
}

gulp.task('workflow', () => {
  return scss();
});

gulp.task('watch', () => {
  gulp.watch(source + '/*.scss', { events: 'all' }, function(cb) {
    scss();
    cb();
  });
});
