var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var fs = require('fs');

module.exports = {
  entry: './src/client.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public/js/'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel', query: { presets: ['react', 'stage-0', 'es2015'] } },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader',
        'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
      } //'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
    ]
  },

  // postcss: [
  //   require('autoprefixer-core')
  // ],

  resolve: {
    // modulesDirectories: ['node_modules', 'components'],
    extensions: ['', '.js']
  },

  plugins: [
    new ExtractTextPlugin('styles.css', { allChunks: true })
  ],

  node: {
    fs: "empty"
  },

  cache: false
};