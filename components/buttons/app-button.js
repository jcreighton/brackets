/** @jsx React.DOM */

var React = require('react');
var Link = React.createFactory(require('react-router-component').Link);

var Button = React.createClass({
  getDefaultProps: function() {
    return {
      url: '/',
    }
  },
  propTypes: {
    url: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    className: React.PropTypes.string
  },
  render: function() {
    return this.transferPropsTo(
      <div className="ob-button">
        <Link href={this.props.url}>{this.props.children}</Link>
      </div>
    );
  }
});

module.exports = Button;