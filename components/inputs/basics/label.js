/** @jsx React.DOM */

var React = require('react');

var Label = React.createClass({
  render: function() {
    return (
      <label for={this.props.forInput}>{this.props.children}</label>
    );
  }
});

module.exports = Label;