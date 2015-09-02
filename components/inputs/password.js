/** @jsx React.DOM */

var React = require('react');
var Input = require('./basics/basic-input.js');
var Error = require('./basics/error.js');

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
      errorMessage: 'Must be 6-18 characters. Can contain letters, numbers, !@?$ symbols only.'
    }
  },
  propTypes: {
    label: React.PropTypes.string
  },
  isValid: function() {
    // check that password is only letters, numbers, !@? & > 8 characters
    var regex = /^[a-zA-Z0-9$!?@]{6,18}$/;
    var value = this.refs.password.getDOMNode().value;

    var isValidPassword = regex.test(value);

    if (!isValidPassword) {
      this.setState({isVisible: true, isValid: false});
    } else {
      this.setState({isVisible: false, isValid: true});
    }

    return {
      password: isValidPassword,
      value: value
    };
  },
  render: function() {
    return (
      <div className="ob-input password">
        <label>{this.props.label}</label>
        <Input type="password" ref="password" blur={this.isValid} placeholder={this.props.placeholder} />
        <Error isVisible={this.state.isVisible} errorMessage={this.props.errorMessage} />
      </div>
    );
  }
});

module.exports = Password;