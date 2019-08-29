const $ = require('gulp-load-plugins')({
  rename: {
    'gulp-uglify': 'uglify',
  },
});
const gulp = require('gulp');
const combiner = require('stream-combiner2').obj;

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = options => () =>
  combiner(
    gulp.src(options.src),
    $.debug({ title: 'Get js src:' }),
    $.if(
      isDevelopment,
      combiner($.sourcemaps.init(), $.debug({ title: 'Init js sourcemaps:' })),
    ),
    $.concat('assets.js'),
    $.if(!isDevelopment, $.uglify()),
    $.if(
      isDevelopment,
      combiner(
        $.sourcemaps.write(),
        $.debug({ title: 'Write js sourcemaps:' }),
      ),
    ),
    gulp.dest('dist/static/assets'),
    $.debug({ title: 'Write js to dest:' }),
  ).on('error', $.notify.onError('👻 <%= error.message %>'));
