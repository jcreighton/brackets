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
      message: 'Create an account:',
      submitMessage: 'Let\'s make it official --->'
    };
  },
  isValid: function(){
    var test = {test:this.refs.zipcode.isValid()};
    console.log('test', test.test);
  },
  submitForm: function(e) {
    e.preventDefault();
    console.log('submitting form');
    this.isValid();
  },
  render: function() {
    return (
      <form className="ob-signup-form" onSubmit={this.onSubmit}>
        <h2>{this.state.message}</h2>
        <Email />
        <Username />
        <Password />
        <ZipCode ref="zipcode"/>
        <span className="join">{this.state.submitMessage}</span>
        <Submit className="small" onClick={this.submitForm}>SIGN UP</Submit>
      </form>
    );
  }
});

module.exports = SignUpForm;