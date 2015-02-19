var JSX = require('node-jsx').install();
var React = require('react');
var Home = require('./components/Home.react');
var config = require('./config');
var Firebase = require('firebase');
var Ref = new Firebase(config.FIREBASE_URL);

var router = {
  index: function(req, res) {
    var msg = { initialMsg: 'Hello' };
    var markup = React.renderToString(
      Home()
    );

    res.render('home', {
      markup: markup,
      state: JSON.stringify(msg)
    });
  },
  sign_up: function(req, res) {
    // var msg = { initialMsg: 'Hello' };
    // var markup = React.renderToString(
    //   TestApp(
    //     msg
    //   )
    // );

    // res.render('home', {
    //   markup: markup,
    //   state: JSON.stringify(msg)
    // });
  },
  profile: function(req, res) {
    // Profile page
  },
  finder: function(req, res) {
    // Map
  }
};


module.exports = router;