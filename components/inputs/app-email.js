/** @jsx React.DOM */

var React = require('react');
var Input = require('./basics/app-input.js');
var Error = require('./basics/app-error.js');

var EmailAddress = React.createClass({
  getInitialState: function() {
    return {
      isVisible: false,
      isValid: false
    }
  },
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
  isValid: function() {
    // check that email address is valid
    // not blank
    console.log('value', this.refs.email.getDOMNode().value);

  },
  render: function() {
    return (
      <div className="ob-input email">
        <label>{this.props.label}</label>
        <Input type="text" ref="email" blur={this.isValid} placeholder={this.props.placeholder} />
        <Error isVisible={this.state.isVisible} errorMessage={this.props.errorMessage} />
      </div>
    );
  }
});

module.exports = EmailAddress;