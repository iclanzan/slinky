'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');
var rename = require('gulp-rename');
var jshint = require('gulp-jshint');
var template = require('gulp-template');
var concat = require('gulp-concat');
var qunit = require('gulp-qunit');
var uglify = require('gulp-uglify');
var bump = require('gulp-bump');
var notify = require('gulp-notify');

var pkg = require('./package.json');

gulp.task('clean', function () {
  return gulp.src('dist/', {read: false})
    .pipe(clean());
});

gulp.task('test', function () {
  gulp.src('test/slinky.html')
        .pipe(qunit());
});

gulp.task('build', ['clean'], function (){
  return gulp.src('src/*.js')
    .pipe(jshint('src/.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(template(pkg))
    .pipe(concat('jquery.slinky.js'))
    .pipe(gulp.dest('dist'))
    .pipe(rename('jquery.slinky.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
    .pipe(notify({ message: 'Slinky build was successful!' }));
});

gulp.task('bump', function () {
  gulp.src(['./bower.json', './package.json', './slinky.jquery.json'])
    .pipe(bump())
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
  gulp.watch('src/*.js', ['default']);
});

gulp.task('default', ['build', 'test']);
