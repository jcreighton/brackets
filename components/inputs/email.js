/** @jsx React.DOM */

var React = require('react');
var Input = require('./basics/basic-input.js');
var Error = require('./basics/error.js');

var EmailAddress = React.createClass({
  getInitialState: function() {
    return {
      isVisible: false,
      isValid: false
    }
  },
  getDefaultProps: function() {
    return {
      label: 'Email',
      errorMessage: 'Are you sure that\'s a valid e-mail address?'
    }
  },
  propTypes: {
    label: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    errorMessage: React.PropTypes.string
  },
  isValid: function() {
    // check that email address is valid
    var regex = /^([\w\-\.]+)@((\[([0-9]{1,3}\.){3}[0-9]{1,3}\])|(([\w\-]+\.)+)([a-zA-Z]{2,4}))$/;
    var value = this.refs.email.getDOMNode().value;

    var isValidEmail = regex.test(value);

    if (!isValidEmail) {
      this.setState({isVisible: true, isValid: false});
    } else {
      this.setState({isVisible: false, isValid: true});
    }

    return {
      email: isValidEmail,
      value: value
    };
  },
  render: function() {
    return (
      <div className="ob-input email">
        <label>{this.props.label}</label>
        <Input type="text" ref="email" onInputBlur={this.isValid} placeholder={this.props.placeholder} />
        <Error isVisible={this.state.isVisible} errorMessage={this.props.errorMessage} />
      </div>
    );
  }
});

module.exports = EmailAddress;