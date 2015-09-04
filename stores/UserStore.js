var Reflux = require('reflux');
var Actions = require('../actions/actions.js');
var Firebase = require('firebase');
var OpenBracket = new Firebase('https://test-openbracket.firebaseio.com');
var Users = new Firebase('https://test-openbracket.firebaseio.com/users');

var UserStore = Reflux.createStore({
  listenables: [Actions],
  onCreateUser: function(userData) {
    var _this = this;
    OpenBracket.createUser({
      email: userData.email,
      password: userData.password
    }, function(error, authData) {
      if (error) {
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
        // Did user send their full name?
        var fullName = (userData.name.length > 1);

        var profile = {
          'first_name': fullName ? userData.name[0] : userData.name,
          'username': userData.username,
          'email': userData.email,
          'conductAgreementSigned': true,
          'interactions': userData.interactionsList
        };

        // If user sent full name, assign last name to profile property
        if (fullName) {
          profile.last_name = userData.name[1];
        }

        // Create profile for user
        Users.child(authData.uid).set(profile, _this.onUserLogin(userData, '/'));
        }
    });
  },
  onCheckUsername: function(username) {
    var checkIfExists = function(snapshot) {
      this.trigger({
        isUnique: !(snapshot.exists())
      });
    }.bind(this);

    Users.orderByChild('username')
               .equalTo(username)
               .once('value', checkIfExists);
  },
  onUserLogin: function(userData, path) {
    var _this = this;
    console.log('on user login', userData);
    console.log('log user in');
    OpenBracket.authWithPassword({
      email: userData.email,
      password: userData.password
    }, function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully:", authData);
        var path = '/' + userData.username;

      }
    });

    // Direct to Map? Highlight profile & handraise areas
    // or direct to profile, highlight areas to fill in & handraise
  }
});

module.exports = UserStore;