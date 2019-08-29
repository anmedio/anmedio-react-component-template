const $ = require('gulp-load-plugins')();
const gulp = require('gulp');
const combiner = require('stream-combiner2').obj;
const imgmin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const mozjpeg = require('imagemin-mozjpeg');
const svgo = require('imagemin-svgo');

module.exports = options => () =>
  combiner(
    gulp.src(options.src),
    $.debug({ title: 'Get images src:' }),
    imgmin([pngquant(), mozjpeg(), svgo({ removeViewBox: false })], {
      verbose: true,
    }),
    gulp.dest('dist/static/img'),
    $.debug({ title: 'Write images to dest:' }),
  ).on('error', $.notify.onError('👻 <%= error.message %>'));
