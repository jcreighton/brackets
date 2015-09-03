/** @jsx React.DOM */

var React = require('react');

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
    value: React.PropTypes.string
  },
  render: function() {
    return (
      <input
        type={this.props.type}
        onBlur={this.props.onInputBlur}
        onChange={this.props.onInputChange}
        placeholder={this.props.placeholder}
        value={this.props.value}
      />
    );
  }
});

module.exports = Input;