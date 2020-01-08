'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

sass.compiler = require('node-sass');

const sassToCss = (done) => {
  gulp.src('./sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./css'))
    .on('end', done);
}
gulp.task(sassToCss);


exports.default = function() {
  gulp.watch('./sass/*.scss', sassToCss);
};

