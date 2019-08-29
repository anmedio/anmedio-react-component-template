import paths from './paths';

module.exports = {
  mode: 'production',
  output: {
    filename: 'bundle.js',
    path: paths.outputPath,
    publicPath: '/static/',
  },
  plugins: [],
  devtool: 'source-map',
};
