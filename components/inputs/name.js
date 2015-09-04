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
    // Check that name contains ONLY letters & length is >=1 <= 60
    var regex = /^[a-zA-Z]{1,60}$/;
    var value = this.refs.name.getDOMNode().value.split(' ');

    var isValidName = value.length > 1 ? regex.test(value[0]) && regex.test(value[1]) : regex.test(value[0]);

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

    var returnValue = {
      name: isValidName,
      value: value
    };

    return returnValue;
  },
  render: function() {
    return (
      <div className="ob-input name">
        <label>{this.props.label}</label>
        <Input type="text" ref="name" onInputBlur={this.isValid} placeholder={this.props.placeholder} value={this.props.value} />
        <Error isVisible={this.state.isVisible} errorMessage={this.props.errorMessage} />
      </div>
    );
  }
});

module.exports = Name;