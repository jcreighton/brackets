var JSX = require('node-jsx').install({harmony: true});
var express = require('express');
var React = require('react');
var Router = require('react-router');
var Match = require('react-router/lib/match');
var RouterContext = require('react-router/lib/RouterContext');
var ReactDOM = require('react-dom/server');
var routes = require('./routes.js');
var HtmlWrapper = require('./components/html/html.js');

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
console.log('__dirname', __dirname);
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
      // var wrapper = React.createFactory(HtmlWrapper);
      var context = React.createFactory(RouterContext);
      var html = ReactDOM.renderToString(context(renderProps));
      res.status(200).send('<!doctype html>\n' + '<head></head><body><div id="open-bracket-app">' + html + '</div><script type="text/javascript" src="/js/bundle.js"></script></body></html>');
    } else {
      res.status(404).send('Not found')
    }
  });
});


