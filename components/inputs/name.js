/** @jsx React.DOM */

var React = require('react');
var Input = require('./basics/basic-input.js');
var Feedback = require('./basics/feedback.js');

var Name = React.createClass({
  getInitialState: function() {
    return {
      isVisible: true,
      isValid: true,
      isError: false
    }
  },
  getDefaultProps: function() {
    return {
      message: 'Your name will be public',
      errorMessage: 'Must be 1-30 characters; no special characters'
    }
  },
  propTypes: {
    message: React.PropTypes.string,
    errorMessage: React.PropTypes.string,
    label: React.PropTypes.string
  },
  isValid: function() {
    // Check that name contains ONLY letters & length is >=1 <= 60
    var regex = /^[a-zA-Z]{1,60}$/;
    var value = this.refs.name.getDOMNode().value.split(' ');

    var isValidName = value.length > 1 ? regex.test(value[0]) && regex.test(value[1]) : regex.test(value[0]);

    if (!isValidName) {
      this.setState({
        isValid: false,
        isError: true
      });
    } else {
      this.setState({
        isValid: true,
        isError: false
      });
    }

    var returnValue = {
      name: isValidName,
      value: value
    };

    return returnValue;
  },
  render: function() {
    var message = this.state.isValid ? this.props.message : this.props.errorMessage;

    return (
      <div className="ob-input name">
        <Feedback isVisible={this.state.isVisible} isError={this.state.isError} message={message} />
        <div className="input">
          <label>{this.props.label}</label>
          <Input type="text" ref="name" onInputBlur={this.isValid} placeholder={this.props.placeholder} value={this.props.value} />
        </div>
      </div>
    );
  }
});

module.exports = Name;