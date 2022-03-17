'use strict';

module.exports = {
  options: {
    buildType: 'single-page-application',
  },
  plugins: [ 'scss' ],
  modifyWebpackConfig({ webpackConfig }) {
    webpackConfig.resolve.fallback = {
      'fs': false,
      'module': false,
      'os': require.resolve('os-browserify/browser'),
      'path': require.resolve('path-browserify'),
      'url': require.resolve('url/'),
      'util': require.resolve('util/'),
    };

    return webpackConfig;
  },
};
