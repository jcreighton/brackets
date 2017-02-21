var React = require('react');
var classnames = require('classnames');

import styles from './input-checkbox.css';

var InputCheckbox = React.createClass({
  getInitialState: function() {
    return {
      isChecked: false
    }
  },
  getDefaultProps: function() {
    return {
      id: 'checkbox',
      isChecked: false,
      isDisabled: false
    };
  },
  propTypes: {
    id: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string,
    value: React.PropTypes.string,
    returnValue: React.PropTypes.func,
    isChecked: React.PropTypes.bool,
    onChange: React.PropTypes.func
  },
  handleOnChange: function() {
    const isChecked = !this.state.isChecked;
    this.setState({
      isChecked
    });

    if (this.props.onChange) {
      this.props.onChange();
    }
  },
  render: function() {
    const { name, id, value, label, isChecked, isDisabled, returnValue } = this.props;

    let checkboxStyles = classnames(
      styles.checkbox,
      {
        [styles.selected]: !isDisabled && this.state.isChecked,
        [styles.disabled]: isDisabled
      }
    );

    return (
      <label className={checkboxStyles}>
        <input
          type="checkbox"
          name={name}
          classID={id}
          ref={returnValue}
          value={value}
          defaultChecked={isChecked}
          onChange={this.handleOnChange} />
          {label}
      </label>
    );
  }
});

module.exports = InputCheckbox;