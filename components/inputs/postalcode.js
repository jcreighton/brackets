/** @jsx React.DOM */

var React = require('react/addons');
var Input = require('./basics/basic-input.js');
var Feedback = require('./basics/feedback.js');

var PostalCode = React.createClass({
  getInitialState: function() {
    return {
      isVisible: true,
      isValid: false
    }
  },
  getDefaultProps: function() {
    return {
      label: 'postal Code',
      message: 'You can edit where your pin appears on the next page',
    }
  },
  propTypes: {
    label: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    message: React.PropTypes.string
  },
  isValid: function() {
    var value = this.refs.postalcode.getDOMNode().value;

    if (value) {
      this.setState({
        isValid: true,
        isError: false
      });
    } else {
      this.setState({
        isValid: false,
        isError: true
      });
    }

    return {
      postalcode: (value),
      value: value
    };
  },
  render: function() {
    var message = this.state.isValid ? this.props.message : 'Enter a postalcode or use current location';

    return (
      <div className="ob-input postalcode">
        <Feedback isVisible={this.state.isVisible} isError={this.state.isError} message={message} />
        <div className="input">
          <label>{this.props.label}</label>
          <Input type="text" ref="postalcode" onInputBlur={this.isValid} placeholder={this.props.placeholder} />
        </div>
      </div>
    );
  }
});

module.exports = PostalCode;