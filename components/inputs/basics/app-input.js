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
    placeholder: React.PropTypes.string
  },
  render: function() {
    return (
      <input type={this.props.type} onBlur={this.props.blur} placeholder={this.props.placeholder} />
    );
  }
});

module.exports = Input;