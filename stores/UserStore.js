var Reflux = require('reflux');
var Actions = require('../actions/actions.js');
var Firebase = require('firebase');
var openBracket = new Firebase('https://test-openbracket.firebaseio.com/users');

var UserStore = Reflux.createStore({
  listenables: [Actions],
  onCreateUser: function(userData) {
    var _this = this;
    openBracket.createUser({
      email: userData.email,
      password: userData.password
    }, function(error, authData) {
      if (error) {
        console.log("User creation failed!", error);
        // if EMAIL ERROR set error message
        var errorCode = error.code;
        if (errorCode === 'EMAIL_TAKEN') {
          _this.trigger({
            emailError: {
              message: 'Email already in use!',
              isVisible: true
            }
          });
        }
      } else {
        console.log("Created successfully:", authData);
        // Create profile for user
        openBracket.child('users')
            .child(authData.uid)
            .set({
              "first_name": userData.firstName,
              "last_name": userData.lastName,
              "username": userData.username,
              "email": userData.email,
              "conductAgreementSigned": true,
              "interactions": userData.interactionsList
            });
        }
    });
  },
  onCheckUsername: function(username) {
    var checkIfExists = function(snapshot) {
      this.trigger({
        isUnique: !(snapshot.exists())
      });
    }.bind(this);

    openBracket.orderByChild('username')
               .equalTo(username)
               .once('value', checkIfExists);
  },
  onLoginUser: function() {
    console.log('log user in');
  }
});

module.exports = UserStore;