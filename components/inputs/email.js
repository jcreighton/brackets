/** @jsx React.DOM */

var React = require('react');
var Input = require('./basics/basic-input.js');
var Feedback = require('./basics/feedback.js');

var EmailAddress = React.createClass({
  getInitialState: function() {
    return {
      isVisible: true,
      isValid: true,
      isError: false
    }
  },
  getDefaultProps: function() {
    return {
      isUnique: true,
      label: 'Email',
      message: 'This email will never be shown or shared'
    }
  },
  propTypes: {
    isUnique: React.PropTypes.bool,
    label: React.PropTypes.string,
    placeholder: React.PropTypes.string
  },
  isValid: function() {
    // check that email address is valid
    var regex = /^([\w\-\.]+)@((\[([0-9]{1,3}\.){3}[0-9]{1,3}\])|(([\w\-]+\.)+)([a-zA-Z]{2,4}))$/;
    var value = this.refs.email.getDOMNode().value;

    var isValidEmail = regex.test(value);

    if (!isValidEmail) {
      this.setState({
        isValid: false,
        isError: true,
      });
    } else {
      this.setState({
        isValid: true,
        isError: false
      });
    }

    return {
      email: isValidEmail,
      value: value
    };
  },
  render: function() {
    var errorMessage = this.props.isUnique ? 'Are you sure that\'s a valid e-mail address?' : 'An account with that email address already exists';
    var message = this.state.isValid ? this.props.message : errorMessage;

    return (
      <div className="ob-input email">
        <Feedback isVisible={this.state.isVisible} isError={this.state.isError} message={message} />
        <div className="input">
          <label>{this.props.label}</label>
          <Input type="text" ref="email" onInputBlur={this.isValid} placeholder={this.props.placeholder} />
        </div>
      </div>
    );
  }
});

module.exports = EmailAddress;