/** @jsx React.DOM */

var React = require('react');
var Error = require('./basics/error.js');
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
      errorMessage: 'Select an option above.'
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

    return (
      <div className={this.props.checklistClassName}>
        {checklist}
        <Error isVisible={this.state.isVisible} errorMessage={this.props.errorMessage} />
      </div>
    );
  }
});

module.exports = CheckboxList;