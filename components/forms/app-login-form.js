/** @jsx React.DOM */

var React = require('react');
var Firebase = require('firebase');
var ref = new Firebase(FIREBASE_URL);
var Email = require('../inputs/app-email.js');
var Username = require('../inputs/app-username.js');
var Password = require('../inputs/app-password.js');
var Submit = require('../buttons/app-event-button.js');

var LoginForm = React.createClass({
  getInitialState: function() {
    return {

    };
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
      <div>LOGIN</div>
      <form className="ob-signup-form">
        <Email ref="email"/>
        <Password />
        <Submit className="small" onClick={this.isValid}>LOGIN</Submit>
      </form>
    );
  }
});

module.exports = LoginForm;