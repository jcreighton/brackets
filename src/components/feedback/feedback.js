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
      placement: 'below',
      message: 'Hi! I\'m a message!'
    }
  },
  propTypes: {
    isError: React.PropTypes.bool,
    isVisible: React.PropTypes.bool,
    placement: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  render: function() {
    const { message, isError, isVisible, placement } = this.props;

    let feedbackStyles = classNames(
      styles.feedback,
      {
        [styles.left]: (placement === 'left'),
        [styles.right]: (placement === 'right'),
        [styles.above]: (placement === 'above'),
        [styles.below]: (placement === 'below'),
        [styles.error]: isError,
        [styles.hidden]: !isVisible,
        [styles.visible]: isVisible
      }
    );

    return (
      <span className={feedbackStyles}>
        {message}
      </span>
    );
  }
});

module.exports = Feedback;