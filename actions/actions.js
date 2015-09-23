var Reflux = require('reflux');
var Firebase = require('firebase');
var OpenBracket = new Firebase('https://openbracket.firebaseio.com');
var Users = new Firebase('https://openbracket.firebaseio.com/users');

var Actions = Reflux.createActions([
  'createUser',
  'checkUsername',
  'userLogin',
  'router',
  'navigate',
  'profileCreation',
  'geolocateCurrentLocation',
  'geolocatePostalCode',
  'reverseGeolocate'
]);

Actions.createUser.listen(function(userData) {
  createUser(userData, function(path) {
    Actions.navigate(path);
  })
});


// *** USER CREATION & LOGIN *** //

var createProfile = function(id, profile) {
  console.log('id & profile', id, profile);
  // Create profile for user
  Users.child(id).set(profile, function(res) {
    console.log('create profile', res);
  });
};

var userLogin = function(userData) {
  var handleLogin = function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully:", authData);
      var path = '/' + userData.username;
      onLogin(path);
    }
  };

  OpenBracket.authWithPassword({
    email: userData.email,
    password: userData.password
  }, handleLogin);
};

var createUser = function(userData) {
  console.log(userData);
  OpenBracket.createUser({
    email: userData.email,
    password: userData.password
  }, function(error, authData) {
    if (error) {
      // if EMAIL ERROR set error message
      var errorCode = error.code;
      if (errorCode === 'EMAIL_TAKEN') {
        // _this.trigger({
        //   emailError: {
        //     message: 'Email already in use!',
        //     isVisible: true
        //   }
        // });
      }
    } else {
      // Did user send their full name?
      var fullName = (userData.name.length > 1);

      var profile = {
        'first_name': fullName ? userData.name[0] : userData.name,
        'username': userData.username,
        'email': userData.email,
        'conductAgreementSigned': true,
        // 'interactions': userData.interactionsList
      };

      // If user sent full name, assign last name to profile property
      if (fullName) {
        profile.last_name = userData.name[1];
      }

      var triggerLocationSet = function() {
        // this.trigger({
        //   user: profile,
        //   step_one: complete
        // });
      }.bind(this);
      console.log('authdata', authData);
      createProfile(authData.uid, profile);
      userLogin(onLogin);
    }
  });
};


module.exports = Actions;