/** @jsx React.DOM */

var React = require('react');
var Link = require('react-router-component').Link;

var EventButton = React.createClass({
  getDefaultProps: function() {
    return {
      label: 'Go',
    }
  },
  propTypes: {
    label: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
    onClick: React.PropTypes.func.isRequired
  },
  render: function() {
    return this.transferPropsTo(
      <div className="ob-button" onClick={this.props.onClick}>
        <a>{this.props.children}</a>
      </div>
    );
  }
});

module.exports = EventButton;