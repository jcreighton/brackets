var JSX = require('node-jsx').install({harmony: true});
var express = require('express');
var React = require('react');
var Router = require('react-router');
var Match = require('react-router/lib/match');
var RouterContext = require('react-router/lib/RouterContext');
var ReactDOM = require('react-dom/server');
var routes = require('./routes.js');

// Create an express instance and set a port variable
var app = express();
var port = process.env.PORT || 8080;

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
  Match({ routes, location }, function(error, redirectLocation, renderProps) {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      var context = React.createFactory(RouterContext);
      var application = ReactDOM.renderToString(context(renderProps));
      // ES6 template string to assemble initial HTML
      var html = `<!doctype html><html><head><title>Open Bracket | an open community for women coders</title><link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" /><link rel="icon" href="/img/favicon.ico" type="image/x-icon" /><link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,300' rel='stylesheet' type='text/css' /><link rel="stylesheet" type="text/css" href="/css/normalize.css" /><link rel="stylesheet" type="text/css" href="/css/app.css" /></head><body><div id="open-bracket-app">${application}</div><footer><span>Built by <a href="http://twitter.com/gurlcode" target="_blank">Jenn Creighton</a></span></footer><script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script><script type="text/javascript" src="/js/bundle.js"></script></body></html>`;
      res.status(200).send(html);
    } else {
      res.status(404).send('Not found')
    }
  });
});


