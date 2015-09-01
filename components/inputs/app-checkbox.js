/** @jsx React.DOM */

var React = require('react');

var Checkbox = React.createClass({
  getInitialState: function() {
    return {
      checked: this.props.checked,
      isValid: false
    }
  },
  isValid: function() {
    var checkboxNode = this.refs.checkbox.getDOMNode();
    var isChecked = checkboxNode.checked;
    var value = checkboxNode.value;

    this.handleChange(isChecked);

    var returnValue = {
      value: value
    };
    returnValue[value] = isChecked;
    return returnValue;
  },
  handleChange: function(isChecked) {
    this.setState({
      checked: isChecked,
      isValid: isChecked
    });
  },
  propTypes: {
    checked: React.PropTypes.bool,
    name: React.PropTypes.string,
    value: React.PropTypes.string
  },
  render: function() {
    return (
      <div>
        <input type="checkbox" ref="checkbox" name={this.props.name} onChange={this.isValid} checked={this.state.checked} value={this.props.value} />
        <span>{this.props.text}</span>
      </div>
    );
  }
});

module.exports = Checkbox;