/** @jsx React.DOM */

var React = require('react');
var Input = require('./basics/app-input.js');
var Error = require('./basics/app-error.js');

var Username = React.createClass({
  getInitialState: function() {
    return {
      isVisible: false,
      isValid: false
    }
  },
  getDefaultProps: function() {
    return {
      label: 'Username',
      placeholder: 'Choose a nifty username!',
      errorMessage: 'Must be 3-18 characters. Letters, numbers, - and _ allowed.'
    }
  },
  propTypes: {
    label: React.PropTypes.string
  },
  isValid: function() {
    // Check that username contains ONLY letters/numbers & >= 4 characters
    var regex = /^[a-zA-Z0-9_-]{3,18}$/;
    var value = this.refs.username.getDOMNode().value;

    var isValidUsername = regex.test(value);

    if (!isValidUsername) {
      this.setState({isVisible: true, isValid: false});
    } else {
      this.setState({isVisible: false, isValid: true});
    }

    return {
      username: isValidUsername,
      value: value
    };
  },
  render: function() {
    return (
      <div className="ob-input username">
        <label>{this.props.label}</label>
        <Input type="text" ref="username" blur={this.isValid} placeholder={this.props.placeholder} />
        <Error isVisible={this.state.isVisible} errorMessage={this.props.errorMessage} />
      </div>
    );
  }
});

module.exports = Username;

