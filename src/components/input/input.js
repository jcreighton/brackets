var React = require('react');

var styles = require('./input.css');

var Input = React.createClass({
  getDefaultProps: function() {
    return {
      type: 'text'
    }
  },
  propTypes: {
    type: React.PropTypes.string.isRequired,
    blur: React.PropTypes.func,
    placeholder: React.PropTypes.string,
    defaultValue: React.PropTypes.string
  },
  handleOnBlur: function() {
    this.props.onBlur(this.input.value);
  },
  handleOnChange: function() {
    this.props.onChange(this.input.value);
  },
  render: function() {
    return (
      <input
        className={styles.input}
        type={this.props.type}
        name={this.props.name}
        ref={(node) => this.input = node}
        onFocus={this.props.onFocus}
        onBlur={this.handleOnBlur}
        onChange={this.handleOnChange}
        placeholder={this.props.placeholder}
        defaultValue={this.props.defaultValue}
      />
    );
  }
});

module.exports = Input;