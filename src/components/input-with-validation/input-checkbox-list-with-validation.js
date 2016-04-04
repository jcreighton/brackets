var React = require('react');

var InputCheckboxList= require('../input-checkbox-list/input-checkbox-list');
var Feedback = require('../feedback/feedback.js');

module.exports = function createCheckboxWithValidation(initialState, defaultProps) {
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
        ...defaultProps,
        message: 'Select at least one option',
        error: 'You must select at least one option',
        limit: 1
      };
    },
    propTypes: {
      checklist: React.PropTypes.array,
    },
    isValid: function() {
      var checked = this.inputs
                      .filter((checkbox) => checkbox.checked)
                      .map((checkbox) => checkbox.name);

      var isValid = (checked.length >= this.props.limit);

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
        checked
      };
    },
    render: function() {
      const { message, error, isVisible } = this.props;
      const { isError, isValid } = this.state;

      this.inputs = [];

      return (
        <div style={{display: 'flex'}}>
          <Feedback {...this.props} {...this.state} placement={'left'} isVisible={isVisible || isValid} message={isError ? error : message} />
          <InputCheckboxList
            {...this.props}
            returnValue={(node) => {
                if (node != null) {
                  this.inputs.push(node);
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