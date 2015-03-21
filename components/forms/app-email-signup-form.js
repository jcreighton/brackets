/** @jsx React.DOM */
var React = require('react');
var Firebase = require('firebase');
var EmailListRef = new Firebase('https://glowing-inferno-6073.firebaseio.com');
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
      },
      toggleMessage: false
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
      var ref = EmailListRef.push({
        'email': this.data.email,
        'suggestion': this.data.text
      });

      this.postMessage();
    }
  },
  postMessage: function(){
    console.log('setState');
    this.setState({toggleMessage: true});
  },
  render: function() {
    var classes = this.state.toggleMessage ? 'toggle-message' : '';

    return (
      <div className={classes}>
        <div className="thanks">Thanks for the note!</div>
        <form className="ob-email-signup-form">
          <Email ref="email"/>
          <TextBox ref="text" />
          <Submit className="small" onClick={this.isValid}>SUBMIT</Submit>
        </form>
      </div>
    );
  }
});

module.exports = EmailSignUpForm;