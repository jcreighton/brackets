/** @jsx React.DOM */

var React = require('react');
var classNames = require('classnames');
var Input = require('./basics/basic-input.js');
var Feedback = require('./basics/feedback.js');

var TextBox = React.createClass({
  getInitialState: function() {
    return {
      isVisible: false,
      isValid: false,
      characterCount: ''
    }
  },
  getDefaultProps: function() {
    return {
      label: 'Suggestions? We\'d Love to Hear Them!',
      errorMessage: 'Must be under 600 characters!'
    }
  },
  propTypes: {
    label: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    errorMessage: React.PropTypes.string,
    defaultValue: React.PropTypes.string
  },
  updateCharacterCount: function() {
    var length = this.refs.text.getDOMNode().value.length;

    this.setState({characterCount: (600 - length)});
  },
  isValid: function() {
    // check that text is below 300 characters
    var value = this.refs.text.getDOMNode().value;

    var isValidText = (value.length < 600);

    if (!isValidText) {
      this.setState({isVisible: true, isValid: false});
    } else {
      this.setState({isVisible: false, isValid: true});
    }

    return {text: isValidText && value};
  },
  render: function() {
    var classes = classNames(
      'character-counter',
      {
        'warning': (this.state.characterCount < 10),
        'hidden': (this.state.characterCount == 0)
      }
    );

    return (
      <div className="ob-input textbox">
        <Feedback isVisible={this.state.isVisible} isError={this.state.isValid} message={this.state.errorMessage} />
        <div className="input">
          <label>{this.props.label}</label>
          <textarea ref="text" defaultValue={this.props.defaultValue} onChange={this.updateCharacterCount} onBlur={this.isValid}></textarea>
          <span className={classes}>{this.state.characterCount}</span>
        </div>
      </div>
    );
  }
});

module.exports = TextBox;