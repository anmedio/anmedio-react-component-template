const { task, src, dest, watch, parallel, series } = require('gulp');
const del = require('del');

const lazyRequireTask = (taskName, path, options = {}) => {
  const currentOptions = options;
  currentOptions.taskName = taskName;
  task(taskName, callback => {
    /* eslint-disable import/no-dynamic-require */
    const runningTask = require(path).call(this, currentOptions);
    return runningTask(callback);
  });
};

lazyRequireTask('html', './gulptasks/html.gulptask.js', {
  src: 'src/static/pug/*.pug',
});

lazyRequireTask('css', './gulptasks/css.gulptask.js', {
  src: 'src/static/scss/main.scss',
});

lazyRequireTask('js', './gulptasks/js.gulptask.js', {
  src: 'src/static/js/*.js',
});

lazyRequireTask('fonts', './gulptasks/fonts.gulptask.js', {
  src: 'src/static/fonts/**/*',
});

lazyRequireTask('images', './gulptasks/images.gulptask.js', {
  src: 'src/static/img/**/*',
});

lazyRequireTask('assetsCss', './gulptasks/assetscss.gulptask.js', {
  src: 'src/static/assets/**/*.css',
});

lazyRequireTask('assetsJs', './gulptasks/assetsjs.gulptask.js', {
  src: 'src/static/assets/**/*.js',
});

lazyRequireTask('server', './gulptasks/server.gulptask.js');

task('clean', () => del('dist/*'));

task('fonts', () =>
  src('src/static/fonts/**/*').pipe(dest('dist/static/fonts')),
);

task('watch', () => {
  watch('src/static/pug/**/*.pug', { usePolling: true }, series('html'));
  watch('src/static/scss/**/*.scss', { usePolling: true }, series('css'));
  watch('src/static/js/**/*.js', { usePolling: true }, series('js'));
  watch(
    'src/static/assets/**/*',
    { usePolling: true },
    parallel('assetsCss', 'assetsJs'),
  );
});

task(
  'build',
  series(
    'clean',
    parallel('html', 'css', 'js'),
    parallel('fonts', 'images', parallel('assetsCss', 'assetsJs')),
  ),
);

task(
  'default',
  series(
    'clean',
    parallel('html', 'css', 'js'),
    parallel('fonts', 'images', parallel('assetsCss', 'assetsJs')),
    parallel('server', 'watch'),
  ),
);
