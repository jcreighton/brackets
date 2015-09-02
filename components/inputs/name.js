/** @jsx React.DOM */

var React = require('react');
var Input = require('./basics/basic-input.js');
var Error = require('./basics/error.js');

var Name = React.createClass({
  getInitialState: function() {
    return {
      isVisible: false,
      isValid: false
    }
  },
  getDefaultProps: function() {
    return {
      errorMessage: 'Must be 1-30 characters. Special characters not allowed.'
    }
  },
  propTypes: {
    label: React.PropTypes.string
  },
  isValid: function() {
    // Check that name contains ONLY letters & length is >=1 <= 30
    var key = Object.keys(this.refs);
    var regex = /^[a-zA-Z]{1,30}$/;
    var value = this.refs[key].getDOMNode().value;

    var isValidName = regex.test(value);

    if (!isValidName) {
      this.setState({
        isVisible: true,
        isValid: false
      });
    } else {
      this.setState({
        isVisible: false,
        isValid: true
      });
    }

    var returnValue = { value: value };
    returnValue[key] = isValidName;

    return returnValue;
  },
  render: function() {
    return (
      <div className="ob-input name">
        <label>{this.props.label}</label>
        <Input type="text" ref={this.props.refName} blur={this.isValid} placeholder={this.props.placeholder} value={this.props.value} />
        <Error isVisible={this.state.isVisible} errorMessage={this.props.errorMessage} />
      </div>
    );
  }
});

module.exports = Name;