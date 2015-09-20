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
      label: 'Name',
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
    var name = this.refs.name.getDOMNode().value.split(' ');

    var isValidName = name.length > 1 ? regex.test(name[0]) && regex.test(name[1]) : regex.test(name[0]);
    var state;

    if (!isValidName) {
      state = {
        isValid: false,
        isError: true
      };
    } else {
      state = {
        isValid: true,
        isError: false
      };
    }

    this.setState(state);

    this.props.onValidation('name', {
      isValid: isValidName,
      value: name
    });
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