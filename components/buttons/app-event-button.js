/** @jsx React.DOM */

var React = require('react');
var Link = React.createFactory(require('react-router-component').Link);

var EventButton = React.createClass({
  getDefaultProps: function() {
    return {
      label: 'Go',
      className: 'default'
    }
  },
  propTypes: {
    label: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
    onClick: React.PropTypes.func.isRequired
  },
  render: function() {
    var className = 'ob-button ' + this.props.className;
    return (
      <div className={className} onClick={this.props.onClick}>
        <a>{this.props.label}</a>
      </div>
    );
  }
});

module.exports = EventButton;