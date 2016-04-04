require('babel-core/register');
var hook = require('css-modules-require-hook');
hook({
  generateScopedName: '[name]__[local]___[hash:base64:5]',
});

var express = require('express');
var React = require('react');
var Router = require('react-router');
var match = require('react-router/lib/match');
var RouterContext = require('react-router/lib/RouterContext');
var ReactDOM = require('react-dom/server');
var routes = require('./routes.js');
var { Provider } = require('react-redux');
var configureStore = require('./store/configureStore.js');

// Create an express instance and set a port variable
var app = express();
var port = process.env.PORT || 3000;

// Set app port
app.set('port', port);

// Start server
var server = app.listen(port, function() {
  console.log('Listening on port ' + port);
});

// Set /public as the static content dir
app.use('/', express.static('/Users/jenncreighton/personal/brackets/public'));

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


