var React = require('react');

var InputCustom = require('../input-custom/input-custom.js');
var Feedback = require('../feedback/feedback.js');

/**
 * Creates an input component with validation.
 * @prop initialState
 * @prop defaultProps type & label & message & error & withFeedback
 * @prop validation Sets the text to display
 */

module.exports = function createInputWithValidation(initialState, defaultProps, validation) {
  return React.createClass({
    getInitialState: function() {
      return {
        isValid: false,
        isError: false,
        ...initialState
      }
    },
    getDefaultProps: function() {
      return defaultProps;
    },
    propTypes: {
      label: React.PropTypes.string,
      message: React.PropTypes.string,
    },
    isValid: function() {
      console.log('isValid', this.state, this.props);
      var value = this.input.value;
      var isValid = validation(value);

      if (isValid) {
        this.setState({
          isValid: true,
          isError: false
        });
      } else {
        this.setState({
          isValid: false,
          isError: true
        });
      }
      console.log('isValid', value, this.state, this.props);
      return {
        name: this.props.type,
        isValid,
        value
      };
    },
    render: function() {
      const { message, error } = this.props;
      const { isError, isValid } = this.state;

      return (
        <div>
          <Feedback {...this.props} {...this.state} isVisible={isError} message={isValid ? message : error} />
          <InputCustom
            {...this.props}
            returnValue={(node) => {
              if (node != null) {
                this.input = node }
              }
            }
            onBlur={this.isValid} />
        </div>
      );
    }
  });
}