const browserSync = require('browser-sync');

module.exports = () => () =>
  browserSync({
    server: {
      baseDir: 'dist',
    },
    notify: false,
    port: 3000,
    ghostMode: {
      clicks: false,
      forms: false,
      scroll: false,
    },
  });
