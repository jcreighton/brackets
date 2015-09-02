/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router-component');
var Reflux = require('reflux');
// var UserStore = require('../../stores/UserStore.js');
var Firebase = require('firebase');
var openBracket = new Firebase('https://test-openbracket.firebaseio.com/users');

// UTILITIES
var _ = require('lodash');

// COMPONENTS
var Email = require('../inputs/email.js');
var Username = require('../inputs/username.js');
var Name = require('../inputs/name.js');
var CheckboxList = require('../inputs/checkbox-list.js');
var Checkbox = require('../inputs/checkbox.js');
var Password = require('../inputs/password.js');
var Submit = require('../buttons/event-button.js');
var Error = require('../inputs/basics/error.js');

var actions = Reflux.createActions([
  'createUser',
  'checkUsername',
  'loginUser'
]);

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
  onCheckUsername: function(userData) {
    var isUnique = function(exists) {
      this.trigger({isUniqueUsername: exists});
    }.bind(this);

    openBracket.orderByChild('username')
               .equalTo(userData.username)
               .once('value', function(snapshot) {
                  isUnique(snapshot.exists());
                });
  },
  onLoginUser: function() {
    console.log('log user in');
  }
});

var SignUpForm = React.createClass({
  mixins: [Router.NavigatableMixin, Reflux.connect(UserStore)],
  getInitialState: function() {
    return {
      emailError: {
        message: 'Email already in use!',
        isVisible: false
      },
      conductError: {
        message: 'AGREE WITH IT, DAMN IT!',
        isVisible: false
      },
      checkboxes: [
        {
          value: 'social',
          text: 'I\'d like to find new friends'
        },
        {
          value: 'mentor',
          text: 'I\'d like to be a mentor'
        },
        {
          value: 'mentee',
          text: 'I\'d like to find a mentor'
        },
        {
          value: 'networking',
          text: 'I\'m interested in networking'
        }
      ]
    };
  },
  isValid: function(e) {
    e.preventDefault();

    // Get validity information from invididual inputs
    var keys = Object.keys(this.refs);
    var inputs = keys.map(function(key) {
      return this.refs[key].isValid();
    }, this);

    // Determine if any are invalid
    var invalidInputs = inputs.filter(function(input, i) {
      return input[keys[i]] === false;
    });

    // All inputs are valid
    if (invalidInputs.length === 0) {
      // Create a clean object
      this.data = {};
      inputs.forEach(function(input, i) {
        this.data[keys[i]] = input.value;
      }, this);

      console.log('this.data', this.data);

      // Create user
      actions.checkUsername(this.data);
      // actions.createUser(this.data);
    }
  },
  createUser: function() {
    var _this = this;

    // ref.createUser({
    //   email: this.data.email,
    //   password: this.data.password
    // }, function(error, authData) {
    //   if (error) {
    //     console.log("User creation failed!", error);
    //     // if EMAIL ERROR set error message
    //     var errorCode = error.code;
    //     if (errorCode === 'EMAIL_TAKEN') {
    //       _this.setState({
    //         emailError: {
    //           message: 'Email already in use!',
    //           isVisible: true
    //         }
    //       });
    //     }
    //   } else {
    //     console.log("Created successfully:", authData);
    //     // Create profile for user
    //     ref.child('users')
    //         .child(authData.uid)
    //         .set({
    //           "first_name": _this.data.firstName,
    //           "last_name": _this.data.lastName,
    //           "username": _this.data.username,
    //           "email": _this.data.email,
    //           "conductAgreementSigned": true,
    //           "interactions": _this.data.interactionsList
    //         });
        // location: {lat: 123, long: 678},


        // Log user in
        // _this.loginUser();
    //   }
    // });

    // Firebase image hosting...
  },
  loginUser: function() {
    var _this = this;

    // ref.authWithPassword({
    //   email: this.data.email,
    //   password: this.data.password
    // }, function(error, authData) {
    //   if (error) {
    //     console.log("Login Failed!", error);
    //   } else {
    //     console.log("Authenticated successfully:", authData);
    //     var path = '/' + _this.data.username + '/profile';
    //     _this.navigate(path);
    //   }
    // });

    // Direct to Map? Highlight profile & handraise areas
    // or direct to profile, highlight areas to fill in & handraise
  },
  render: function() {
    return (
      <form className="ob-signup-form">
        <h2>{this.props.message}</h2>
        <Email ref="email"/>
        <Error isVisible={this.state.emailError.isVisible} errorMessage={this.state.emailError.message} />
        <Username ref="username" />
        <Password ref="password" />
        <Name ref="firstName" refName="firstName" label="First Name" placeholder="First name" />
        <Name ref="lastName" refName="lastName" label="Last Name" placeholder="Last name" />
        <CheckboxList ref="interactionsList" refName="interactionsList" checklistClassName="interactions-list" checkboxes={this.state.checkboxes} />
        <Checkbox ref="conductAgreement" checkboxClassName="conduct-agreement" value="conductAgreement" text="I agree to the Code of Conduct"/>
        <Submit className="small" onClick={this.isValid}>SIGN UP</Submit>
      </form>
    );
  }
});

module.exports = SignUpForm;