var React = require('react');
var {Router, Route, browserHistory} = require('react-router');
var HomePage = require('./components/pages/home.js');
var SignUpPage = require('./components/pages/signup.js');

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={HomePage} />
    <Route path="/sign-up" component={SignUpPage} />
  </Router>
);