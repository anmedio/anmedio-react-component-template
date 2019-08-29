const $ = require('gulp-load-plugins')();
const gulp = require('gulp');
const combiner = require('stream-combiner2').obj;

module.exports = options => () =>
  combiner(
    gulp.src(options.src),
    $.debug({ title: 'Get pug src:' }),
    $.pug({ pretty: true }),
    gulp.dest('dist'),
    $.debug({ title: 'Write html to dest:' }),
  ).on('error', $.notify.onError('👻 <%= error.message %>'));
