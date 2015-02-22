/** @jsx React.DOM */

var React = require('react');
var Firebase = require('firebase');
var Email = require('../inputs/app-email.js');
var Username = require('../inputs/app-username.js');
var Password = require('../inputs/app-password.js');
var ZipCode = require('../inputs/app-zipcode.js');
var Submit = require('../buttons/app-event-button.js');

var SignUpForm = React.createClass({
  getInitialState: function() {
    return {
      message: 'Join the fun!',
      submitMessage: 'Let\'s make it official --->'
    };
  },
  submitForm: function() {
    e.preventDefault();
    console.log('submitting form');
  },
  render: function() {
    return (
      <form className="ob-signup-form" onSubmit={this.onSubmit}>
        <h2>{this.state.message}</h2>
        <Email />
        <Username />
        <Password />
        <ZipCode />
        <span className="join">{this.state.submitMessage}</span>
        <Submit className="small" onClick={this.submitForm}>SIGN UP</Submit>
      </form>
    );
  }
});

module.exports = SignUpForm;