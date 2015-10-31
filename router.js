var JSX = require('node-jsx').install({harmony: true});
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var App = require('./pages/app.js');

var renderTemplate = function(usePath, res){
    var path = {path: usePath};
    var app = App(path);
    var markup = ReactDOMServer.renderToString(app);

    res.render('main', {
      markup: markup
    });
};

var router = {
  index: function(req, res) {
    renderTemplate('/', res);
  },
  sign_up: function(req, res) {
    renderTemplate('/sign-up', res);
  },
  profile: function(req, res) {
    renderTemplate('/:username', res);
  },
  map: function(req, res) {
    renderTemplate('/map', res);
  }
};


module.exports = router;