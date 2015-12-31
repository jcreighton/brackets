var React = require('react');
var classNames = require('classnames');

var Checkbox = React.createClass({
  getInitialState: function() {
    return {
      checked: this.props.checked,
      isValid: false
    }
  },
  isValid: function() {
    // Checkboxes are valid when checked === true
    var checkboxNode = this.refs.checkbox.getDOMNode();
    var isChecked = checkboxNode.checked;
    var value = checkboxNode.value;

    this.setState({
      checked: isChecked,
      isValid: isChecked
    });

    // Call onSelection callback if provided
    if (this.props.onSelection) {
      this.props.onSelection(value, {
        isValid: isChecked,
        value: value
      });
    }

    // Call handleChange callback if provided
    if (this.props.handleChange) {
      this.props.handleChange();
    }
  },
  propTypes: {
    checked: React.PropTypes.bool,
    name: React.PropTypes.string,
    value: React.PropTypes.string,
    onSelection: React.PropTypes.func,
    handleChange: React.PropTypes.func
  },
  render: function() {
    var type = {};
    type['type-' + this.props.type] = this.props.type;

    var classes = classNames(
      'ob-input ob-checkbox',
      this.props.className,
      {
        'selected': this.state.checked && !this.props.disabled,
        'disabled': this.props.disabled
      },
      type
    );

    return (
      <label className={classes}>
        <input
          type="checkbox"
          ref="checkbox"
          name={this.props.name}
          onChange={this.isValid}
          checked={this.state.checked}
          value={this.props.value} />
          {this.props.text}
      </label>
    );
  }
});

module.exports = Checkbox;