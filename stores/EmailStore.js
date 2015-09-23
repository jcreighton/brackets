var Reflux = require('reflux');
var Actions = require('../actions/actions.js');

var EmailStore = Reflux.createStore({
  listenables: [Actions],
  onEmailExists: function() {
    this.trigger({
      isUnique: false,
      isValid: false,
      isError: true
    });
  }
});

module.exports = EmailStore;