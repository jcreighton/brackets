/** @jsx React.DOM */

var React = require('react');
var classNames = require('classnames');
var Checkbox = require('./checkbox.js');

var Geolocation = React.createClass({
  getDefaultProps: function() {
    return {
      isBlocked: false,
      text: 'Use current location'
    };
  },
  propTypes: {
    text: React.PropTypes.string,
    className: React.PropTypes.string
  },
  handleClick: function() {
    this.props.handleClick();
  },
  render: function() {
    var classes = classNames(
      'ob-geolocation',
      this.props.className
    );

    return (
      <div className={classes}>
        <Checkbox
          type="tag"
          name="geolocation"
          className="geolocation"
          value="geolocation"
          text={this.props.text}
          disabled={this.props.isBlocked}
          handleChange={this.handleClick}
        />
      </div>
    );
  }
});

module.exports = Geolocation;