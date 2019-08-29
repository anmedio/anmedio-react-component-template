import webpack from 'webpack';

import paths from './paths';
import rules from './rules';

const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
  entry: paths.entryPath,
  module: {
    rules,
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js', '.jsx', '.es6'],
    alias: {
      '~': paths.src,
    },
  },
  plugins: [new webpack.ProgressPlugin(), new FriendlyErrorsWebpackPlugin()],
};
