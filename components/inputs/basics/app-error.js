/** @jsx React.DOM */

var React = require('react/addons');

var Error = React.createClass({
  getDefaultProps: function() {
    return {
      isVisible: false
    }
  },
  propTypes: {
    errorMessage: React.PropTypes.string.isRequired,
  },
  render: function() {
    var cx = React.addons.classSet;
    var classes = cx({
      'ob-error': true,
      'ob-state-hidden': !this.props.isVisible,
      'ob-state-visible': this.props.isVisible
    });

    return (
      <span className={classes}>{this.props.errorMessage}</span>
    );
  }
});

module.exports = Error;