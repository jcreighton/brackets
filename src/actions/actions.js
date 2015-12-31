var Reflux = require('reflux');
var Firebase = require('firebase');
var OpenBracket = new Firebase('https://openbracket.firebaseio.com');
var Users = new Firebase('https://openbracket.firebaseio.com/users');

var Actions = Reflux.createActions([
  'createUser',
  'checkUsername',
  'usernameUnique',
  'usernameExists',
  'userLogin',
  'emailExists',
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

Actions.checkUsername.listen(function(username) {
  checkUsername(username);
});


// *** USER CREATION & LOGIN *** //

var createProfile = function(id, profile) {
  // Create profile for user
  Users.child(id).set(profile);
};

var userLogin = function(userData) {
  var handleLogin = function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully:", authData);
      var path = '/' + userData.username;
      Actions.nagivate(path);
    }
  };

  OpenBracket.authWithPassword({
    email: userData.email,
    password: userData.password
  }, handleLogin);
};

var createUser = function(userData) {
  OpenBracket.createUser({
    email: userData.email,
    password: userData.password
  }, function(error, authData) {
    if (error) {
      // if EMAIL ERROR set error message
      var errorCode = error.code;
      if (errorCode === 'EMAIL_TAKEN') {
        Actions.emailExists();
      }
    } else {
      // Did user send their full name?
      var fullName = (userData.name.length > 1);

      var profile = {
        'first_name': fullName ? userData.name[0] : userData.name,
        'username': userData.username,
        'email': userData.email,
        'conductAgreementSigned': true,
        'interactions': userData.checklist
      };

      // If user sent full name, assign last name to profile property
      if (fullName) {
        profile.last_name = userData.name[1];
      }

      // Create profile
      createProfile(authData.uid, profile);
      // Log user in
      userLogin(userData);
    }
  });
};

var checkUsername = function(username) {
  var checkIfExists = function(snapshot) {
    var isUnique = snapshot.exists();

    if (isUnique) {
      Actions.usernameUnique();
    } else {
      Actions.usernameExists();
    }
  };

    Users.orderByChild('username')
               .equalTo(username)
               .once('value', checkIfExists);
};


module.exports = Actions;