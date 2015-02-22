/** @jsx React.DOM */

var React = require('react');
var Email = React.createFactory(require('../inputs/app-email.js'));
var Username = React.createFactory(require('../inputs/app-username.js'));
var Password = React.createFactory(require('../inputs/app-password.js'));
var ZipCode = React.createFactory(require('../inputs/app-zipcode.js'));
var Submit = React.createFactory(require('../buttons/app-event-button.js'));

var SignUpForm = React.createClass({
  getInitialState: function() {
    return {
      message: 'Join the fun!',
      submitMessage: 'Let\'s make it official --->'
    };
  },
  submitForm: function() {
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
        <Submit className="small" onClick={this.submitForm}>Sign Up</Submit>
      </form>
    );
  }
});

module.exports = SignUpForm;