var React = require('react');
var classNames = require('classnames');

var InputCheckbox = React.createClass({
  getInitialState: function() {
    return {
      isChecked: true
    }
  },
  getDefaultProps: function() {
    return {
      id: 'checkbox',
      isChecked: false
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
    const { name, id, value, label, checked, returnValue } = this.props;

    return (
      <label htmlFor={id}>
        <input
          type="checkbox"
          name={name}
          classID={id}
          ref={returnValue}
          value={value}
          defaultChecked={this.props.isChecked}
          onChange={this.handleOnChange} />
          {label}
      </label>
    );
  }
});

module.exports = InputCheckbox;