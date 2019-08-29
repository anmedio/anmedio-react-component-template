import webpack from 'webpack';
import Jarvis from 'webpack-jarvis';

import paths from './paths';

module.exports = {
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: paths.outputPath,
    publicPath: '/static/',
  },
  performance: {
    hints: 'warning',
    maxAssetSize: 20000000,
    maxEntrypointSize: 8500000,
    assetFilter: assetFilename =>
      assetFilename.endsWith('.css') || assetFilename.endsWith('.js'),
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    hot: true,
    compress: true,
    hotOnly: true,
    stats: {
      colors: true,
      hash: false,
      version: false,
      timings: false,
      assets: false,
      chunks: false,
      modules: false,
      reasons: false,
      children: false,
      source: false,
      errors: false,
      errorDetails: false,
      warnings: false,
      publicPath: false,
    },
    contentBase: paths.outputPath,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Jarvis({
      port: 1337,
    }),
  ],
};
