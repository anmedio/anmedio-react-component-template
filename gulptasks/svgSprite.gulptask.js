const $ = require('gulp-load-plugins')();
const gulp = require('gulp');
const combiner = require('stream-combiner2').obj;

module.exports = options => () =>
  combiner(
    gulp.src(options.src),
    $.debug({ title: 'Get svgSprite src:' }),
    gulp.dest('dist/static/img'),
    $.debug({ title: 'Write svgSprite to dest:' }),
  ).on('error', $.notify.onError('👻 <%= error.message %>'));
