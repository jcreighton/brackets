/** @jsx React.DOM */

var React = require('react');
var Firebase = require('firebase');
var ref = new Firebase('https://glowing-inferno-6073.firebaseio.com');
var Email = require('../inputs/email.js');
var Username = require('../inputs/username.js');
var Password = require('../inputs/password.js');
var Submit = require('../buttons/event-button.js');

var LoginForm = React.createClass({
  getInitialState: function() {
    return {
      placeholder: '',
      errorMessage: ''
    };
  },
  isValid: function() {
    console.log('no');
  },
  loginUser: function() {
    console.log('authenticating...');

    ref.authWithPassword({
      email: email,
      password: password
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
      <div className="ob-signup-form">
        <h2>LOGIN</h2>
        <Email ref="email"/>
        <Password placeholder={this.state.placeholder} errorMessage={this.state.errorMessage}/>
        <Submit className="small" onClick={this.isValid}>LOGIN</Submit>
      </div>
    );
  }
});

module.exports = LoginForm;