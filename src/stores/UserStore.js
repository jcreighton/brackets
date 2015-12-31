var Reflux = require('reflux');
var Actions = require('../actions/actions.js');

var UserStore = Reflux.createStore({
  listenables: [Actions],
  onUsernameUnique: function(onComplete) {
    this.trigger({
      isUniqueUsername: false,
      message: 'Username taken!',
      isError: true
    });

    if (typeof onComplete === "function") {
      onComplete(username);
    }
  },
  onUsernameExists: function(onComplete) {
    this.trigger({
      isUniqueUsername: true,
      message: 'Create a username',
      isValid: true,
      isError: false
    });

    if (typeof onComplete === "function") {
      onComplete(username);
    }
  }
});

module.exports = UserStore;