/** @jsx React.DOM */

var React = require('react');

var EmailAddress = React.createClass({
  getDefaultProps: function() {
    return {
      label: 'E-mail',
      placeholder: 'e-mail@e-mail.com',
      errorMessage: 'Are you sure that\'s a valid e-mail address?'
    }
  },
  propTypes: {
    label: React.PropTypes.string
  },
  checkEmailAddress: function() {
    // check that email address is valid
  },
  render: function() {
    return (
      <div className="ob-input email">
        <label>{this.props.label}</label>
        <input type="text" ref="email" onBlur={this.checkEmailAddress} placeholder={this.props.placeholder} />
        <span className="ob-error ob-state-hidden">{this.props.errorMessage}</span>
      </div>
    );
  }
});

module.exports = EmailAddress;