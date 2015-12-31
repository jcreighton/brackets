module.exports = {
  entry: './src/client.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public/js/'
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
        loader: 'babel',
        query: {
          presets:['stage-0', 'es2015', 'react']
        }
      }
    ]
  },
  watch: true
}