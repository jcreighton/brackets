var React = require('react');
var classNames = require('classnames');

var styles = require('./feedback.css');

/**
 * Component that provides feedback to the user.
 * General feedback defaults to teal. Error feedback defaults to red.
 * @prop isError Controls text color
 * @prop isVisible Controls text visibility; set to true if showing both
 * a general message and an error
 * @prop message Sets the text to display
 */
var Feedback = React.createClass({
  getDefaultProps: function() {
    return {
      isError: false,
      isVisible: false,
      message: 'Hi! I\'m a message!'
    }
  },
  propTypes: {
    isError: React.PropTypes.bool,
    isVisible: React.PropTypes.bool,
    message: React.PropTypes.string.isRequired
  },
  render: function() {
    var classes = classNames(
      styles.feedback,
      styles.left,
      {
        [styles.error]: this.props.isError,
        [styles.hidden]: !this.props.isVisible,
        [styles.visible]: this.props.isVisible
      }
    );

    return (
      <span className={classes}>
        {this.props.message}
      </span>
    );
  }
});

module.exports = Feedback;