var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var IndexRoute = require('react-router').IndexRoute;
var browserHistory = require('react-router').browserHistory;
var App = require('./containers/app.js');
var Home = require('./components/pages/home.js');
var SignUp = require('./components/pages/signup.js');

module.exports = (
  <Router history={ browserHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ Home } />
      <Route path="sign-up" component={ SignUp } />
    </Route>
  </Router>
);