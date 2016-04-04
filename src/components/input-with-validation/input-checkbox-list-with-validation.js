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
        message: 'Select at least one',
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
      const { message, error } = this.props;
      const { isError, isValid } = this.state;

      this.inputs = [];

      return (
        <div>
          <Feedback {...this.props} {...this.state} placement={'left'} isVisible={isError} message={isValid ? message : error} />
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