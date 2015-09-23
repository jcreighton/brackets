/** @jsx React.DOM */

var React = require('react');
var Input = require('./basics/basic-input.js');
var Feedback = require('./basics/feedback.js');

var Password = React.createClass({
  getInitialState: function() {
    return {
      isVisible: true,
      isValid: false,
      isError: false
    }
  },
  getDefaultProps: function() {
    return {
      label: 'Password',
      message: '6-18 characters; Letters, numbers, !@?$ symbols only'
    }
  },
  propTypes: {
    label: React.PropTypes.string,
    message: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    errorMessage: React.PropTypes.string,
    defaultValue: React.PropTypes.string
  },
  isValid: function() {
    // check that password is only letters, numbers, !@? &; 6-18 characters
    var regex = /^[a-zA-Z0-9$!?@]{6,18}$/;
    var password = this.refs.password.getDOMNode().value;

    var isValidPassword = regex.test(password);
    var state;

    if (!isValidPassword) {
      state = {
        isValid: false,
        isError: true
      };
    } else {
      state = {
        isValid: true,
        isError: false
      };
    }

    this.setState(state);

    this.props.onValidation('password', {
      isValid: isValidPassword,
      value: password
    });
  },
  render: function() {
    return (
      <div className="ob-input password">
        <Feedback isVisible={this.state.isVisible} isError={this.state.isError} message={this.props.message} />
        <div className="input">
          <label>{this.props.label}</label>
          <Input type="password" ref="password" onInputBlur={this.isValid} placeholder={this.props.placeholder} defaultValue={this.props.defaultValue}/>
        </div>
      </div>
    );
  }
});

module.exports = Password;