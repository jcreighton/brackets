/** @jsx React.DOM */

var React = require('react');
var Firebase = require('firebase');
var config = require('../../config');
var ref = new Firebase(config.FIREBASE_URL);
var Email = require('../inputs/app-email.js');
var Username = require('../inputs/app-username.js');
var Password = require('../inputs/app-password.js');
var ZipCode = require('../inputs/app-zipcode.js');
var Submit = require('../buttons/app-event-button.js');
var Error = require('../inputs/basics/app-error.js');

var SignUpForm = React.createClass({
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
      // { email: this.refs.email.refs.email.getDOMNode().value },
      // this.refs.username.isValid(),
      // this.refs.password.isValid(),
      this.refs.zipcode.isValid()
    ];

    // determine if any are invalid
    var invalidInputs = inputs.filter(function(input, i) {
      return input[Object.keys(input)] === false;
    });

    // all inputs are valid
    if (invalidInputs.length < 0) {
      // create a clean object
      var inputsObj = {};
      inputs.forEach(function(input) {
        var key = Object.keys(input);
        clean[key] = input[key];
      });

      // submit form with clean object
      this.submitForm(inputsObj);
    }
  },
  submitForm: function(data) {
    console.log('submitting form');

    ref.createUser({
      email: data.email,
      password: data.password
    }, function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
      }
    });
  },
  render: function() {
    return (
      <form className="ob-signup-form">
        <h2>{this.state.message}</h2>
        <Email ref="email"/>
        <Error />
        <Username />
        <Password />
        <ZipCode ref="zipcode"/>
        <Submit className="small" onClick={this.isValid}>SIGN UP</Submit>
      </form>
    );
  }
});

module.exports = SignUpForm;