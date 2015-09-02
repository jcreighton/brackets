var Reflux = require('reflux');
var Firebase = require('firebase');
var openBracket = new Firebase('https://test-openbracket.firebaseio.com/users');

var UserStore = Reflux.createStore({
  listenables: [actions],
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
        openBracket.child(authData.uid)
            .set({
              "first_name": userData.firstName,
              "last_name": userData.lastName,
              "username": userData.username,
              "email": userData.email,
              "conductAgreementSigned": true,
              "interactions": userData.interactionsList
            });
  },
  onLoginUser: function() {

  }
});

module.exports = UserStore;