/** @jsx React.DOM */

var React = require('react');

var ZipCode = React.createClass({
  getDefaultProps: function() {
    return {
      label: 'Zip Code',
      placeholder: 'Please and thank you.',
      answer: 'Open Bracket lets you find fellow lady developers nearby, so we need to know your zip code for location purposes.',
      errorMessage: 'Are you sure that\'s a valid zipcode?'
    }
  },
  propTypes: {
    label: React.PropTypes.string
  },
  checkZipCode: function() {
    // check that zip code is valid in US
  },
  displayAnswer: function() {

  },
  render: function() {
    return (
      <div className="ob-input zipcode">
        <label>{this.props.label}</label>
        <input type="text" ref="zipcode" onBlur={this.checkZipCode} placeholder={this.props.placeholder} />
        <div className="ob-question"><span onHover={this.displayAnswer}>?</span><span className="ob-answer ob-state-hidden">{this.props.answer}</span></div>
        <span className="ob-error">{this.props.errorMessage}</span>
      </div>
    );
  }
});

module.exports = ZipCode;