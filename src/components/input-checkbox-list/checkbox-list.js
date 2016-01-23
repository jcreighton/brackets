var React = require('react');
var Feedback = require('./basics/feedback.js');
var Checkbox = require('./checkbox.js');

var CheckboxList = React.createClass({
  getInitialState: function() {
    return {
      checklist: {},
      isValid: false,
      isVisible: false,
      isError: false
    }
  },
  getDefaultProps: function() {
    return {
      limit: 0,
      message: 'Select at least one option'
    }
  },
  propTypes: {
    checkboxes: React.PropTypes.array,
    limit: React.PropTypes.number,
    message: React.PropTypes.string
  },
  isValid: function() {
    // Find which checkboxes are valid (checked)
    // var checked = this.state.checklist.filter(function(checkbox) {
    //   return checkbox.isValid;
    // });

    // var isValidChecklist = (checked.length >= this.props.limit);
    // var state;

    // if (isValidChecklist) {
    //   state = {
    //     isValid: true,
    //     isVisible: false,
    //     isError: false
    //   };
    // } else {
    //   state = {
    //     isValid: false,
    //     isVisible: true,
    //     isError: true
    //   };
    // }

    // this.setState(state);

    // this.props.onValidation('checklist', {
    //   isValid: isValidChecklist,
    //   value: checked
    // });
  },
  onSelection: function(name, inputState) {
    // this.state.checklist[name] = inputState;

    // this.isValid();
  },
  render: function() {
    var checklist = this.props.checkboxes.map(function(props, index) {
      var checkboxRef = 'checkbox_' + index;
      props.onSelection = this.onSelection;

      return <Checkbox
              key={checkboxRef}
              ref={checkboxRef}
              {...props} />
    }, this);

    var classes = 'ob-input ob-checklist ' + this.props.className;

    return (
      <div className={classes}>
        {checklist}
        <Feedback isVisible={this.state.isVisible} isError={this.state.isError} message={this.props.message} />
      </div>
    );
  }
});

module.exports = CheckboxList;