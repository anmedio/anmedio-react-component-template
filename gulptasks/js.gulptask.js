const $ = require('gulp-load-plugins')();
const gulp = require('gulp');
const combiner = require('stream-combiner2').obj;

module.exports = options => () =>
  combiner(
    gulp.src(options.src),
    $.debug({ title: 'Get js src:' }),
    $.babel({
      presets: ['@babel/env'],
    }),
    gulp.dest('dist/static/js'),
    $.debug({ title: 'Write js to dest:' }),
  ).on('error', $.notify.onError('👻 <%= error.message %>'));
