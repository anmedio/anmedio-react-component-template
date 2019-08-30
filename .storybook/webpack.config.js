module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.pug$/,
    use: ['babel-loader', 'storypug/lib/webpack-loader.js'],
  });

  config.module.rules.push({
    test: /\.js?$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  });

  return config;
};
