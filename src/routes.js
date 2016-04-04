var React = require('react');
var { Router, Route, IndexRoute, browserHistory } = require('react-router');

// CONTAINERS
var App = require('./containers/app.js');
var Home = require('./containers/home.js');
var SignUp = require('./containers/signup.js');
var Location = require('./containers/location.js');
var UserMap = require('./containers/map.js');
var Profile = require('./containers/profile.js');

module.exports = (
  <Router history={ browserHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ Home } />
      <Route path="sign-up" component={ SignUp } />
      <Route path="sign-up/location" component={ Location } />
      <Route path="map" component={ UserMap } />
      <Route path=":username" component={ Profile } />
    </Route>
  </Router>
);