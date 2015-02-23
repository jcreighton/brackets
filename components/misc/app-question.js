/** @jsx React.DOM */

var React = require('react');

var Question = React.createClass({
  getDefaultProps: function() {
    return {
      answer: 'Is this helpful?'
    }
  },
  propTypes: {
    answer: React.PropTypes.string.isRequired,
  },
  render: function() {
    return (
      <div className="ob-question"><span>?</span><span className="ob-answer">{this.props.answer}</span></div>
    );
  }
});

module.exports = Question;