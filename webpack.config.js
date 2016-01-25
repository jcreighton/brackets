var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var fs = require('fs');

module.exports = {
  entry: './src/client.js',
  output: {
    filename: 'js/bundle.js',
    path: __dirname + '/public/'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel', query: { presets: ['react', 'stage-0', 'es2015'] } },
      {
        test: /\.css$/,
        exclude: /flexboxgrid|normalize\.css$/,
        loader: ExtractTextPlugin.extract('style-loader',
        'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
      },
      {
        test: /\.css$/,
        include: /flexboxgrid|normalize\.css$/,
        loaders: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
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
    new ExtractTextPlugin('css/styles.css', { allChunks: true })
  ],

  node: {
    fs: "empty"
  },

  cache: false,

  devtool: 'source-map'
};