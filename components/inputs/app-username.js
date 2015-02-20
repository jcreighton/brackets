/** @jsx React.DOM */

var React = require('react');

var Username = React.createClass({
  getDefaultProps: function() {
    return {
      label: 'Username',
      placeholder: 'Choose a nifty username!',
      errorMessage: 'Drat! Someone already has that username. Please choose another.'
    }
  },
  propTypes: {
    label: React.PropTypes.string
  },
  checkUsernameUnique: function() {
    // check that username is unique
    var username = this.refs.username.getDOMNode().value;
    // Firebase.checkUsernameUnique(); ?
  },
  render: function() {
    return (
      <div className="ob-input username">
        <label>{this.props.label}</label>
        <input type="text" ref="username" onBlur={this.checkUsernameUnique} placeholder={this.props.placeholder} />
        <span className="ob-error ob-state-hidden">{this.props.errorMessage}</span>
      </div>
    );
  }
});

module.exports = Username;

