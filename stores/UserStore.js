var Reflux = require('reflux');
var Actions = require('../actions/actions.js');
var Firebase = require('firebase');
var OpenBracket = new Firebase('https://test-openbracket.firebaseio.com');
var Users = new Firebase('https://test-openbracket.firebaseio.com/users');

var UserStore = Reflux.createStore({
  listenables: [Actions],
  onCheckUsername: function(isUnique, callback) {
    var checkIfExists = function(snapshot) {
      var state;

      if (isUnique) {
       state = {
          isUniqueEmail: false,
          message: 'Username taken!',
          isError: true
        }
      } else {
        state = {
          isUniqueEmail: true,
          message: 'Create a username',
          isValid: true,
          isError: false
        }
      }

      this.trigger(state);
      callback(username);
    }.bind(this);
  }
});

module.exports = UserStore;