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
    label: React.PropTypes.string,
    placeholder: React.PropTypes.string
  },
  render: function() {
    return (
      <input type={this.props.type} ref={this.props.ref} placeholder={this.props.placeholder} />
    );
  }
});

module.exports = Input;