var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  entry: './src/server.js',
  output: {
    filename: 'main.js',
    path: __dirname
  },
  externals: nodeModules,
  serverLessLoader: {
    loader: 'importLess'
  },
  module: {
    // preLoaders: [
    //   {
    //     test: /\.js$/,
    //     exclude: /node_modules/,
    //     loader: 'jshint-loader'
    //   }
    // ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel?presets[]=es2015&presets[]=stage-0&presets[]=react'
      },
      // { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
      // { test: /\.css$/, loader: 'style-loader!css-loader' },
      // { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
    ]
  },
  // watch: true
};