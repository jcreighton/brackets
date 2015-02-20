var JSX = require('node-jsx').install();
var React = require('react');
var App = React.createFactory(require('./components/app.js'));
var config = require('./config');
var Firebase = require('firebase');
var Ref = new Firebase(config.FIREBASE_URL);

var router = {
  index: function(req, res) {
    var path = {path: '/'};
    var app = App(path);
    var markup = React.renderToString(app);

    res.render('home', {
      markup: markup,
      state: JSON.stringify(path)
    });
  },
  sign_up: function(req, res) {
    // var app = App();
    // var markup = React.renderToString(app);

    // res.render('home', {
    //   markup: markup
    //   // state: JSON.stringify(msg)
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