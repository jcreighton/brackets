/** @jsx React.DOM */

var React = require('react/addons');
var Input = require('./basics/app-input.js');
var Error = require('./basics/app-error.js');

var TextBox = React.createClass({
  getInitialState: function() {
    return {
      isVisible: false,
      isValid: false
    }
  },
  getDefaultProps: function() {
    return {
      label: 'Suggestion',
      placeholder: 'Would love to hear your thoughts!',
      errorMessage: 'Must be under 300 characters!'
    }
  },
  propTypes: {
    label: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    errorMessage: React.PropTypes.string
  },
  isValid: function() {
    // check that text is below 300 characters
    var value = this.refs.text.getDOMNode().value;

    var isValidText = (value.length < 300);

    if (!isValidText) {
      this.setState({isVisible: true, isValid: false});
    } else {
      this.setState({isVisible: false, isValid: true});
    }

    return {text: isValidText && value};
  },
  render: function() {
    return (
      <div className="ob-input textbox">
        <label>{this.props.label}</label>
        <textarea ref="text" onBlur={this.isValid}></textarea>
        <Error isVisible={this.state.isVisible} errorMessage={this.props.errorMessage} />
      </div>
    );
  }
});

module.exports = TextBox;