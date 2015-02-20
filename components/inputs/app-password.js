/** @jsx React.DOM */

var React = require('react');

var Password = React.createClass({
  getDefaultProps: function() {
    return {
      label: 'Password',
      placeholder: 'Secure your account!'
    }
  },
  propTypes: {
    label: React.PropTypes.string
  },
  render: function() {
    return (
      <div className="ob-input password">
        <label>{this.props.label}</label>
        <input type="password" ref="username" placeholder={this.props.placeholder} />
      </div>
    );
  }
});

module.exports = Password;