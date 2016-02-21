var React = require('react');

var styles = require('./input.css');

var Input = React.createClass({
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
    return (
      <input
        className={styles.input}
        type={this.props.type}
        name={this.props.name}
        ref={this.props.returnValue}
        onFocus={this.handleOnFocus}
        onBlur={this.handleOnBlur}
        onChange={this.handleOnChange}
        placeholder={this.props.placeholder}
      />
    );
  }
});

module.exports = Input;