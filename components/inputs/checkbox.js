/** @jsx React.DOM */

var React = require('react');

var Checkbox = React.createClass({
  getInitialState: function() {
    return {
      checked: this.props.checked,
      isValid: false
    }
  },
  handleChange: function() {
    this.props.handleChange();
    this.isValid();
  },
  isValid: function() {
    // Checkboxes are valid when checked === true
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
    var classes = 'ob-checkbox ' + this.props.className;

    return (
      <label className={classes}>
        <input
          type="checkbox"
          ref="checkbox"
          name={this.props.name}
          onChange={this.handleChange}
          checked={this.state.checked}
          value={this.props.value} />
          {this.props.text}
      </label>
    );
  }
});

module.exports = Checkbox;