var Reflux = require('reflux');
var Actions = require('../actions/actions.js');
var Firebase = require('firebase');
var OpenBracket = new Firebase('https://test-openbracket.firebaseio.com/users');

var SignUpStore = Reflux.createStore({
  listenables: [Actions]
});

module.exports = SignUpStore;