require('babel-core/register');
const hook = require('css-modules-require-hook');
hook({
  generateScopedName: '[name]__[local]___[hash:base64:5]',
});

const path = require('path');
const express = require('express');
const React = require('react');
const Router = require('react-router');
const match = require('react-router/lib/match');
const RouterContext = require('react-router/lib/RouterContext');
const ReactDOM = require('react-dom/server');
const routes = require('./routes.js');
const { Provider } = require('react-redux');
const configureStore = require('./store/configureStore.js');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

// Create an express instance and set a port variable
const app = express();
const port = process.env.PORT || 3000;

// Set app port
app.set('port', port);

// Start server
const server = app.listen(port, function() {
  console.log('Listening on port ' + port);
});

// Set /public as the static content dir
const publicPath = path.resolve(__dirname, '..', 'public');
app.use('/', express.static(publicPath));

const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: { colors: true },
  noInfo: true
}));

app.use(webpackHotMiddleware(compiler, {
  log: console.log, path: '/__webpack_hmr', heartbeat: 1000
}));

app.get('*', function(req, res) {
  const location = req.url;
  console.log('routing...', req.url);
  match({ routes, location }, function(error, redirectLocation, renderProps) {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      var application = ReactDOM.renderToString(<Provider store={configureStore}><RouterContext {...renderProps} /></Provider>);
      res.status(200).send(application);
    } else {
      res.status(404).send('Not found')
    }
  });
});


