/** @jsx React.DOM */

var React = require('react/addons');
var Input = require('./basics/app-input.js');
var Error = require('./basics/app-error.js');

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
      placeholder: 'Would love to hear your thoughts!',
      errorMessage: 'Must be under 600 characters!'
    }
  },
  propTypes: {
    label: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    errorMessage: React.PropTypes.string
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
    var cx = React.addons.classSet;
    var classes = cx({
      'character-counter': true,
      'warning': (this.state.characterCount < 10),
      'hidden': (this.state.characterCount == 0)
    });
    return (
      <div className="ob-input textbox">
        <label>{this.props.label}</label>
        <textarea ref="text" onChange={this.updateCharacterCount} onBlur={this.isValid}></textarea>
        <span className={classes}>{this.state.characterCount}</span>
        <Error isVisible={this.state.isVisible} errorMessage={this.props.errorMessage} />
      </div>
    );
  }
});

module.exports = TextBox;