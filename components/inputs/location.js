/** @jsx React.DOM */

var React = require('react');
var Reflux = require('reflux');
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
  isValid: function() {
    // var postalcode = this.refs.postalcode.isValid();
    // var geolocation = this.refs.geolocation.isValid();

    // var isValidLocation = (postalcode.value || geolocation.value);
    // console.log('isValidLocation', isValidLocation, postalcode.value || geolocation.value);
    console.log({
      location: this.state.isValid,
      value: this.state.userLocation
    });
    return {
      location: this.state.isValid,
      value: this.state.userLocation
    }
  },
  render: function() {
    return (
      <div className="ob-input location">
        <Feedback isVisible={this.state.isVisible} isError={this.state.isError} message={this.state.message} />
        <PostalCode ref="postalcode" />
        <span className="or">or</span>
        <Geolocation ref="geolocation" isBlocked={this.state.isGeolocationBlocked}/>
      </div>
    );
  }
});

module.exports = LocationFinder;