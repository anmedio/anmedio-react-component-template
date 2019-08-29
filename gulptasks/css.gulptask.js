const $ = require('gulp-load-plugins')();
const gulp = require('gulp');
const combiner = require('stream-combiner2').obj;

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = options => () =>
  combiner(
    gulp.src(options.src),
    $.debug({ title: 'Get scss src:' }),
    $.if(
      isDevelopment,
      combiner(
        $.sourcemaps.init(),
        $.debug({ title: 'Init scss sourcemaps:' }),
      ),
    ),
    $.sass({ outputStyle: 'compressed' }).on('error', $.sass.logError),
    $.autoprefixer(['last 6 versions']),
    $.rename('main.min.css'),
    $.if(
      isDevelopment,
      combiner(
        $.sourcemaps.write(),
        $.debug({ title: 'Write scss sourcemaps:' }),
      ),
    ),
    gulp.dest('dist/static/css'),
    $.debug({ title: 'Write css to dest:' }),
  ).on('error', $.notify.onError('👻 <%= error.message %>'));
