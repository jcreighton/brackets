var JSX = require('node-jsx').install({harmony: true});
var express = require('express');
var React = require('react');
var Router = require('react-router');
var Match = require('react-router/lib/match');
var RoutingContext = require('react-router/lib/RoutingContext');
var ReactDOM = require('react-dom/server');
var routes = require('./routes');
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
      var wrapper = React.createFactory(HtmlWrapper);
      var element = React.createFactory(RoutingContext);
      var html = ReactDOM.renderToStaticMarkup(wrapper({body: element(renderProps)}));
      res.status(200).send('<!doctype html>\n' + html);
    } else {
      res.status(404).send('Not found')
    }
  });
});







// var path = require('path');
// var express = require('express');
// var exphbs = require('express-handlebars');
// var router = require('./router.js');

// // Create an express instance and set a port variable
// var app = express();
// var port = process.env.PORT || 8080;

// // Set app port
// app.set('port', port);

// // Start server
// var server = app.listen(port, function() {
//   console.log('Listening on port ' + port);
// });

// // Set handlebars as the templating engine
// app.set('views', path.join(__dirname, 'views/'));
// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');

// // Set /public as the static content dir
// app.use('/', express.static(__dirname + '/public/'));

// // Index Route
// app.get('/', router.index);

// // Sign Up Route
// app.get('/sign-up', router.sign_up);

// // Profile Route
// app.get('/:username', router.profile);

// // Map Route
// app.get('/map', router.map);


