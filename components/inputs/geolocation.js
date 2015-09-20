/** @jsx React.DOM */

var React = require('react');
var classNames = require('classnames');
var Checkbox = require('./checkbox.js');
var Actions = require('../../actions/actions.js');

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
  handleGeolocation: function() {
    Actions.geolocateCurrentLocation();

    if (this.props.handleClick) {
      this.props.handleClick();
    }
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
          disabled={this.props.isDisabled}
          handleChange={this.handleGeolocation}
        />
      </div>
    );
  }
});

module.exports = Geolocation;