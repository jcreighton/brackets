/** @jsx React.DOM */

var React = require('react');
var {Router, Route, browserHistory} = require('react-router');
var HomePage = require('./components/pages/home.js');
var SignUpPage = require('./components/pages/signup.js');

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={HomePage} />
    <Route path="sign-up" component={SignUpPage} />
  </Router>
);



// var JSX = require('node-jsx').install({harmony: true});
// var React = require('react');
// var ReactDOMServer = require('react-dom/server');
// var App = require('./pages/app.js');

// var renderTemplate = function(usePath, res){
//     var path = {path: usePath};
//     var app = App(path);
//     var markup = ReactDOMServer.renderToString(app);

//     res.render('main', {
//       markup: markup
//     });
// };

// var router = {
//   index: function(req, res) {
//     renderTemplate('/', res);
//   },
//   sign_up: function(req, res) {
//     renderTemplate('/sign-up', res);
//   },
//   profile: function(req, res) {
//     renderTemplate('/:username', res);
//   },
//   map: function(req, res) {
//     renderTemplate('/map', res);
//   }
// };


// module.exports = router;