/** @jsx React.DOM */

var React = require('react');

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
    var { className, ...other } = this.props;
    var classes = 'ob-button ' + this.props.className;
    return (
      <div className={classes} onClick={this.props.onClick}>
        <a>{this.props.children}</a>
      </div>
    )
  }
});

module.exports = EventButton;