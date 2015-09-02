/** @jsx React.DOM */

var React = require('react');

var Label = React.createClass({
  render: function() {
    return (
      <label>{this.props.children}</label>
    );
  }
});

module.exports = Label;