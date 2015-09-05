var Reflux = require('reflux');
var Actions = require('../actions/actions.js');
var Firebase = require('firebase');
var openBracket = new Firebase('https://test-openbracket.firebaseio.com/users');

var LocationStore = Reflux.createStore({
  listenables: [Actions],
  onRouter: function(router) {
    this.router = router;
  },
  onNavigate: function (path) {
    this.router.navigate(path);
  }
});

module.exports = LocationStore;