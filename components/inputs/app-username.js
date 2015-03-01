/** @jsx React.DOM */

var React = require('react');
var Input = require('./basics/app-input.js');

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
      errorMessage: 'Drat! Someone already has that username.'
    }
  },
  propTypes: {
    label: React.PropTypes.string
  },
  isValid: function() {
    // check that username contains ONLY letters/numbers & >= 4 characters
    var username = this.refs.username.getDOMNode().value;

    if (lessThanSix) {
      this.setState({errorMessage: 'Must be >= 4 characters & can ONLY contain letters/numbers'});
    }

  },
  render: function() {
    return (
      <div className="ob-input username">
        <label>{this.props.label}</label>
        <input type="text" ref="username" blur={this.isValid} placeholder={this.props.placeholder} />
        <Error isVisible={this.state.isVisible} errorMessage={this.props.errorMessage} />
      </div>
    );
  }
});

module.exports = Username;

