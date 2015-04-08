var JSX = require('node-jsx').install();
var React = require('react');
var App = React.createFactory(require('./components/app.js'));

var renderTemplate = function(usePath, res){
    var path = {path: usePath};
    var app = App(path);
    var markup = React.renderToString(app);

    res.render('home', {
      markup: markup,
      state: JSON.stringify(path)
    });
};

var router = {
  index: function(req, res) {
    renderTemplate('/', res);
  },
  // sign_up: function(req, res) {
  //   renderTemplate('/sign-up', res);
  // },
  // profile_public: function(req, res) {

  // },
  // profile_private: function(req, res) {
  //   var username = req.params.username;
  //   ref.set({message: username});
  //   res.render('home', {
  //     markup: username
  //   });
  // },
  // messages: function(req, res) {

  // },
  // friends: function(req, res) {

  // },
  map: function(req, res) {
    renderTemplate('/map', res);
  }
};


module.exports = router;