/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router-component');
var Firebase = require('firebase');
var ref = new Firebase(process.env.FIREBASE_URL);
var Email = require('../inputs/app-email.js');
var Username = require('../inputs/app-username.js');
var Password = require('../inputs/app-password.js');
var ZipCode = require('../inputs/app-zipcode.js');
var Submit = require('../buttons/app-event-button.js');
var Error = require('../inputs/basics/app-error.js');

var SignUpForm = React.createClass({
  mixins: [Router.NavigatableMixin],
  getInitialState: function() {
    return {
      message: 'Create an account:',
      emailError: {
        message: 'Email already in use!',
        isVisible: false
      }
    };
  },
  isValid: function(e) {
    e.preventDefault();

    // get validity information from invididual input
    var inputs = [
      this.refs.email.isValid(),
      this.refs.username.isValid(),
      this.refs.password.isValid(),
      this.refs.zipcode.isValid()
    ];

    // determine if any are invalid
    var invalidInputs = inputs.filter(function(input, i) {
      return input[Object.keys(input)] === false;
    });

    // all inputs are valid
    if (invalidInputs.length <= 0) {
      var _this = this;
      // create a clean object
      this.data = {};
      inputs.forEach(function(input) {
        var key = Object.keys(input);
        _this.data[key] = input[key];
      });

      // create user
      this.createUser();
    }
  },
  createUser: function() {
    var _this = this;

    ref.createUser({
      email: this.data.email,
      password: this.data.password
    }, function(error, authData) {
      if (error) {
        console.log("User creation failed!", error);
        // if EMAIL ERROR set error message
        var errorCode = error.code;
        if (errorCode === 'EMAIL_TAKEN') {
          _this.setState({
            emailError: {
              message: 'Email already in use!',
              isVisible: true
            }
          });
        }
      } else {
        console.log("Created successfully:", authData);
        // send user data to firebase
        _this.loginUser();
      }
    });
  },
  loginUser: function() {
    var _this = this;

    ref.authWithPassword({
      email: this.data.email,
      password: this.data.password
    }, function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully:", authData);
        var path = '/' + _this.data.username + '/profile';
        _this.navigate(path);
      }
    });

    //direct to profile page
  },
  render: function() {
    return (
      <form className="ob-signup-form">
        <h2>{this.state.message}</h2>
        <Email ref="email"/>
        <Error isVisible={this.state.emailError.isVisible} errorMessage={this.state.emailError.message} />
        <Username ref="username" />
        <Password ref="password" />
        <ZipCode ref="zipcode"/>
        <Submit className="small" onClick={this.isValid}>SIGN UP</Submit>
      </form>
    );
  }
});

module.exports = SignUpForm;