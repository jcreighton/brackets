/** @jsx React.DOM */

var React = require('react');
var Input = require('./basics/app-input.js');
var Error = require('./basics/app-error.js');

var Password = React.createClass({
  getInitialState: function() {
    return {
      isVisible: false,
      isValid: false
    }
  },
  getDefaultProps: function() {
    return {
      label: 'Password',
      placeholder: 'Secure your account!',
      errorMessage: 'Must be >= 8 characaters & can contain letters, numbers & certain symbols ONLY'
    }
  },
  propTypes: {
    label: React.PropTypes.string
  },
  isValid: function() {
    // check that password is only letters, numbers, !@? & > 8 characters
  },
  render: function() {
    return (
      <div className="ob-input password">
        <label>{this.props.label}</label>
        <Input type="password" ref="username" blur={this.isValid} placeholder={this.props.placeholder} />
        <Error isVisible={this.state.isVisible} errorMessage={this.props.errorMessage} />
      </div>
    );
  }
});

module.exports = Password;