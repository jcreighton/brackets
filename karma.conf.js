var webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
  config.set({
    browsers: [ 'Chrome' ],
    files: [
      'tests.config.js'
    ],
    frameworks: [ 'mocha' ],
    plugins: [
      'karma-chrome-launcher',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-webpack',
    ],
    preprocessors: {
      'tests.config.js': [ 'webpack', 'sourcemap' ]
    },
    reporters: [ 'dots' ],
    singleRun: true,
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true,
    }
  });
};