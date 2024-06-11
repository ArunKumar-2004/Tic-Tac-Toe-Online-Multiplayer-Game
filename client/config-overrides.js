const { override } = require('customize-cra');

module.exports = override(
  config => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      path: require.resolve('path-browserify'),
      crypto: require.resolve('crypto-browserify'),
      os: require.resolve('os-browserify/browser'),
      stream: require.resolve('stream-browserify'),
      buffer: require.resolve('buffer/'),
      vm: require.resolve('vm-browserify')
    };
    return config;
  }
);
