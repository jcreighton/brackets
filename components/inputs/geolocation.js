/** @jsx React.DOM */

var React = require('react');
var Reflux = require('reflux');
var classNames = require('classnames');
var Checkbox = require('./checkbox.js');
var MapStore = require('../../stores/MapStore.js');
var Actions = require('../../actions/actions.js');

var Geolocation = React.createClass({
  mixins: [Reflux.connect(MapStore)],
  getInitialState: function() {
    return {
      isValid: false,
      position: {
        lat: -73.952404,
        long: 40.801816
      },
      location: 'New York, NY',
      isBlocked: false
    };
  },
  getDefaultProps: function() {
    return {
      text: 'Use current location'
    };
  },
  propTypes: {
    text: React.PropTypes.string,
    className: React.PropTypes.string
  },
  handleGeolocation: function() {
    Actions.geolocateCurrentLocation();
  },
  isValid: function() {
    handleGeolocation();
  },
  render: function() {
    var classes = classNames(
      'ob-geolocation',
      this.props.className,
      {
        'disabled': this.state.isBlocked
      }
    );

    return (
      <div className={classes}>
        <Checkbox type="tag" name="geolocation" className="geolocation" value="geolocation" text={this.props.text} handleChange={this.handleGeolocation} />
      </div>
    );
  }
});

module.exports = Geolocation;