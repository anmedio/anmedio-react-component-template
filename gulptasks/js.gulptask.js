const $ = require('gulp-load-plugins')();
const gulp = require('gulp');
const combiner = require('stream-combiner2').obj;
const browserSync = require('browser-sync');

module.exports = options => () =>
  combiner(
    gulp.src(options.src),
    $.debug({ title: 'Get js src:' }),
    $.babel({
      presets: ['@babel/env'],
    }),
    gulp.dest('dist/static/js'),
    $.debug({ title: 'Write js to dest:' }),
    browserSync.reload({ stream: true }),
  ).on('error', $.notify.onError('👻 <%= error.message %>'));
