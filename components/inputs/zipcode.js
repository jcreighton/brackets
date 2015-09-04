/** @jsx React.DOM */

var React = require('react/addons');
var Input = require('./basics/basic-input.js');
var Question = require('../misc/question.js');
var Error = require('./basics/error.js');

var ZipCode = React.createClass({
  getInitialState: function() {
    return {
      isVisible: false,
      isValid: false
    }
  },
  getDefaultProps: function() {
    return {
      label: 'Zip Code',
      answer: 'Open Bracket lets you find fellow women coders nearby, so we need to know your zip code for location purposes.',
      errorMessage: 'Are you sure that\'s a valid zipcode?'
    }
  },
  propTypes: {
    label: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    answer: React.PropTypes.string,
    errorMessage: React.PropTypes.string
  },
  isValid: function() {
    // check that zip code is valid 5 digit #
    var regex = /^(\d{5})?$/;
    var value = parseInt(this.refs.zipcode.getDOMNode().value, 10);

    var isValidZipCode = regex.test(value);

    if (!isValidZipCode) {
      this.setState({isVisible: true, isValid: false});
    } else {
      this.setState({isVisible: false, isValid: true});
    }

    return {zipcode: isValidZipCode && value};
  },
  render: function() {
    return (
      <div className="ob-input zipcode">
        <label>{this.props.label}</label>
        <Input type="text" ref="zipcode" onInputBlur={this.isValid} placeholder={this.props.placeholder} />
        <Question answer={this.props.answer} />
        <Error isVisible={this.state.isVisible} errorMessage={this.props.errorMessage} />
      </div>
    );
  }
});

module.exports = ZipCode;