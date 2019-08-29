const $ = require('gulp-load-plugins')({
  rename: {
    'gulp-clean-css': 'cleancss',
  },
});
const gulp = require('gulp');
const combiner = require('stream-combiner2').obj;

module.exports = options => () =>
  combiner(
    gulp.src(options.src),
    $.debug({ title: 'Get scss src:' }),
    $.concat('assets.css'),
    $.cleancss(),
    gulp.dest('dist/static/assets'),
    $.debug({ title: 'Write css to dest:' }),
  ).on('error', $.notify.onError('👻 <%= error.message %>'));
