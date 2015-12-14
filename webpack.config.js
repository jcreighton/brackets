module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public/js/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel'
      }
    ]
  },
  watch: true
}