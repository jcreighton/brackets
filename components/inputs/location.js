/** @jsx React.DOM */

var React = require('react');
var Reflux = require('reflux');
var classNames = require('classnames');
var PostalCode = require('../inputs/postalcode.js');
var Geolocation = require('../inputs/geolocation.js');
var Feedback = require('./basics/feedback.js');
var MapStore = require('../../stores/MapStore.js');
var Actions = require('../../actions/actions.js');

var LocationFinder = React.createClass({
  mixins: [Reflux.connect(MapStore)],
  getInitialState: function() {
    return {
      isVisible: true,
      isValid: false,
      isError: false,
      userLocation: null,
      message: 'You can edit where your pin appears on the next page'
    }
  },
  disableGeolocation: function() {
    this.setState({
      isGeolocationBlocked: true
    });
  },
  handleGeocodePostalCode: function(postalcode) {
    Actions.geolocatePostalCode(postalcode);
  },
  handleGeolocation: function() {
    Actions.geolocateCurrentLocation();
  },
  isValid: function() {
    if (!this.state.userLocation) {
      this.setState({
        isError: true,
        errorMessage: 'You must provide a location'
      });
    }

    return {
      location: this.state.isValid,
      value: this.state.userLocation
    }
  },
  render: function() {
    var message = this.state.isError ? this.state.errorMessage : this.state.message;

    var classes = classNames(
      'or',
      {
        disabled: this.state.isGeolocationBlocked
      }
    );

    return (
      <div className="ob-input location">
        <Feedback
          isVisible={this.state.isVisible}
          isError={this.state.isError}
          message={message} />
        <PostalCode
          ref="postalcode"
          handleChange={this.disableGeolocation}
          handleBlur={this.handleGeocodePostalCode} />
        <span className={classes}>or</span>
        <Geolocation
          ref="geolocation"
          handleClick={this.handleGeolocation}
          isBlocked={this.state.isGeolocationBlocked} />
      </div>
    );
  }
});

module.exports = LocationFinder;