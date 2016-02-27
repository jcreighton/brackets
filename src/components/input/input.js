      var React = require('react');

var styles = require('./input.css');

var Input = React.createClass({
  getDefaultProps: function() {
    return {
      type: 'text'
    };
  },
  propTypes: {
    type: React.PropTypes.string.isRequired,
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    defaultValue: React.PropTypes.string,
    ref: React.PropTypes.func,
    placeholder: React.PropTypes.string,
    onBlur: React.PropTypes.func,
    onChange: React.PropTypes.func,
    onFocus: React.PropTypes.func
  },
  handleOnFocus: function() {
    if (this.props.onFocus) {
      this.props.onFocus();
    }
  },
  handleOnBlur: function() {
    if (this.props.onBlur) {
      this.props.onBlur();
    }
  },
  handleOnChange: function() {
    if (this.props.onChange) {
      this.props.onChange();
    }
  },
  render: function() {
    const { type, name, defaultValue, returnValue, placeholder } = this.props;
    return (
      <input
        className={styles.input}
        type={type}
        name={name}
        defaultValue={defaultValue}
        ref={returnValue}
        onFocus={this.handleOnFocus}
        onBlur={this.handleOnBlur}
        onChange={this.handleOnChange}
        placeholder={placeholder}
      />
    );
  }
});

module.exports = Input;