/** @jsx React.DOM */

var React = require('react');
var Link = React.createFactory(require('react-router-component').Link);

var Button = React.createClass({
  getDefaultProps: function() {
    return {
      url: '/',
      label: 'Go',
      className: 'default'
    }
  },
  propTypes: {
    url: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    className: React.PropTypes.string
  },
  render: function() {
    var className = 'ob-button ' + this.props.className;
    return (
      <div className={className}>
        <Link href={this.props.url}>{this.props.label}</Link>
      </div>
    );
  }
});

module.exports = Button;