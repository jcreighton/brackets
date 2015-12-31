var React = require('react');
var classNames = require('classnames');

var Feedback = React.createClass({
  getDefaultProps: function() {
    return {
      isError: false,
      isVisible: false
    }
  },
  propTypes: {
    isError: React.PropTypes.bool,
    isVisible: React.PropTypes.bool,
    message: React.PropTypes.string
  },
  render: function() {
    var classes = classNames(
      'ob-feedback',
      {
        'ob-error': this.props.isError,
        'ob-state-hidden': !this.props.isVisible,
        'ob-state-visible': this.props.isVisible
      }
    );

    return (
      <div className={classes}>
        <span>
          {this.props.message}
        </span>
      </div>
    );
  }
});

module.exports = Feedback;