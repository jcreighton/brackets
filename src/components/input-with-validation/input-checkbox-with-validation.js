var React = require('react');

var InputCheckbox = require('../input-checkbox/input-checkbox');
var Feedback = require('../feedback/feedback.js');

module.exports = function createCheckboxWithValidation(initialState, defaultProps, validation) {
  return React.createClass({
    getInitialState: function() {
      return {
        isValid: false,
        isError: false,
        ...initialState
      }
    },
    getDefaultProps: function() {
      return {
        ...defaultProps
      };
    },
    propTypes: {
      name: React.PropTypes.string,
      label: React.PropTypes.string,
      message: React.PropTypes.string,
      isChecked: React.PropTypes.bool
    },
    isValid: function() {
      var value = this.input.value;
      var isValid = this.input.checked;

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

      return {
        name: this.props.name || this.props.type,
        isValid,
        value
      };
    },
    render: function() {
      const { message, error } = this.props;
      const { isError, isValid } = this.state;
      console.log(message);
      return (
        <div style={{display: 'flex'}}>
          <Feedback
            {...this.props}
            {...this.state}
            placement={'left'}
            isVisible={isError}
            message={isError ? error : message}
          />
          <InputCheckbox
            {...this.props}
            returnValue={(node) => {
                if (node != null) {
                  this.input = node
                }
              }
            }
            onChange={this.isValid}
          />
        </div>
      );
    }
  });
}