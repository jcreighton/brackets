/** @jsx React.DOM */

var React = require('react');
var Feedback = require('./basics/feedback.js');
var Checkbox = require('./checkbox.js');

var CheckboxList = React.createClass({
  getInitialState: function() {
    return {
      isValid: false,
      isVisible: false
    }
  },
  getDefaultProps: function() {
    return {
      message: 'Select at least one option'
    }
  },
  propTypes: {
    errorMessage: React.PropTypes.string
  },
  isValid: function() {
    var keys = Object.keys(this.refs);

    this.checked = [];
    keys.forEach(function(key) {
      var validObject = this.refs[key].isValid();

      if (validObject[validObject.value]) {
        this.checked.push(validObject.value);
      }
    }, this);

    var returnValue = {
      value: this.checked
    };
    returnValue[this.props.refName] = (this.checked.length > 0);

    this.handleChange();

    return returnValue;
  },
  handleChange: function() {
    if (this.checked.length > 0) {
      this.setState({
        isValid: false,
        isVisible: false
      });
    } else {
      this.setState({
        isValid: true,
        isVisible: true
      });
    }
  },
  propTypes: {
    checkboxes: React.PropTypes.array
  },
  render: function() {
    var checklist = this.props.checkboxes.map(function(checkboxProps, index) {
      var checkboxRef = 'checkbox_' + index;
      return <Checkbox key={checkboxRef} ref={checkboxRef} {...checkboxProps} />
    });

    var classes = 'ob-checklist ' + this.props.className;

    return (
      <div className={classes}>
        {checklist}
        <Feedback isError={this.state.isValid} message={this.props.message} />
      </div>
    );
  }
});

module.exports = CheckboxList;