/** @jsx React.DOM */

var React = require('react');
var Firebase = require('firebase');
var config = require('../../config');
var EmailListRef = new Firebase(config.FIREBASE_URL + '/email_list');
var Email = require('../inputs/app-email.js');
var TextBox = require('../inputs/app-textbox.js');
var Submit = require('../buttons/app-event-button.js');

var EmailSignUpForm = React.createClass({
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
      this.refs.text.isValid()
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

      // send email to database
      EmailListRef.push({
        'email': this.data.email,
        'suggestion': this.data.text
      });
    }
  },
  render: function() {
    return (
      <form className="ob-email-signup-form">
        <Email ref="email"/>
        <TextBox ref="text" />
        <Submit className="small" onClick={this.isValid}>SUBMIT</Submit>
      </form>
    );
  }
});

module.exports = EmailSignUpForm;