/** @jsx React.DOM */

var React = require('react');
var Input = require('./basics/basic-input.js');
var Feedback = require('./basics/feedback.js');

var Password = React.createClass({
  getInitialState: function() {
    return {
      isVisible: true,
      isValid: false
    }
  },
  getDefaultProps: function() {
    return {
      label: 'Password',
      message: 'Must be 6-18 characters; Letters, numbers, !@?$ symbols only'
    }
  },
  propTypes: {
    label: React.PropTypes.string,
    message: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    errorMessage: React.PropTypes.string
  },
  isValid: function() {
    // check that password is only letters, numbers, !@? & > 8 characters
    var regex = /^[a-zA-Z0-9$!?@]{6,18}$/;
    var value = this.refs.password.getDOMNode().value;

    var isValidPassword = regex.test(value);
    var state;

    if (!isValidPassword) {
      state = {
        isVisible: true,
        isValid: false
      };
    } else {
      state = {
        isVisible: false,
        isValid: true
      };
    }

    this.setState(state);

    this.props.onValidation('password', {
      isValid: isValidPassword,
      value: value
    });
  },
  render: function() {
    return (
      <div className="ob-input password">
        <Feedback isError={this.state.isValid} message={this.props.message} />
        <div className="input">
          <label>{this.props.label}</label>
          <Input type="password" ref="password" onInputBlur={this.isValid} placeholder={this.props.placeholder} />
        </div>
      </div>
    );
  }
});

module.exports = Password;