/** @jsx React.DOM */

var React = require('react/addons');
var Label = require('../inputs/basics/app-label.js');
var Input = require('../inputs/basics/app-input.js');

var ZipCode = React.createClass({
  getInitialState: function() {
    return {
      isVisible: false
    }
  },
  getDefaultProps: function() {
    return {
      label: 'Zip Code',
      placeholder: 'Please and thank you.',
      answer: 'Open Bracket lets you find fellow lady developers nearby, so we need to know your zip code for location purposes.',
      errorMessage: 'Are you sure that\'s a valid zipcode?'
    }
  },
  propTypes: {
    label: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    answer: React.PropTypes.string,
    errorMessage: React.PropTypes.string
  },
  checkZipCode: function() {
    // check that zip code is valid 6 digit #
    var isValidZipCode = false;
    console.log(this.refs.zipcode.getDOMNode().value);
    if (!isValidZipCode) {
      this.setState({isVisible: true});
    }
  },
  render: function() {
    var cx = React.addons.classSet;
    var classes = cx({
      'ob-error': true,
      'ob-state-hidden': !this.state.isVisible,
      'ob-state-visible': this.state.isVisible
    });

    return (
      <div className="ob-input zipcode">
        <Label>{this.props.label}</Label>
        <Input type="text" ref="zipcode" blur={this.checkZipCode} placeholder={this.props.placeholder} />
        <div className="ob-question"><span>?</span><span className="ob-answer">{this.props.answer}</span></div>
        <span className={classes}>{this.props.errorMessage}</span>
      </div>
    );
  }
});

module.exports = ZipCode;