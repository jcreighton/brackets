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
      errorMessage: 'Must be more than 3-18 characters. Can contain letters, numbers, hyphens & underscores only.'
    }
  },
  propTypes: {
    label: React.PropTypes.string
  },
  isValid: function() {
    // check that username contains ONLY letters/numbers & >= 4 characters
    var regex = /^[a-z0-9_-]{3,16}$/;
    var value = this.refs.username.getDOMNode().value;

    var isValidUsername = regex.test(value);

    if (!isValidUsername) {
      this.setState({isVisible: true, isValid: false});
    } else {
      this.setState({isVisible: false, isValid: true});
    }

    return {username: isValidUsername && value};
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

