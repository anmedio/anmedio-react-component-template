/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';

module.exports = {
  root: path.resolve(__dirname, '../', '../'),
  src: path.resolve(__dirname, '../', '../', 'src'),
  outputPath: path.resolve(__dirname, '../', '../', 'dist/static/js'),
  entryPath: path.resolve(__dirname, '../', '../', 'src/index.jsx'),
};
