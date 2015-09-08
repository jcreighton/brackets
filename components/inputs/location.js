/** @jsx React.DOM */

var React = require('react');
var PostalCode = require('../inputs/postalcode.js');
var Geolocation = require('../inputs/geolocation.js');

var LocationFinder = React.createClass({
  getInitialState: function() {
    return {
      message: 'Set your location'
    };
  },
  isValid: function() {
    var postalCode = this.refs.postalcode.isValid();
    var geolocation = this.refs.postalcode.isValid();

    var isValidLocation = postalcode || geolocation;

    if (isValidLocation) {
      this.setState({
        isValid: true,
        location: isValidLocation
      });
    } else {
       this.setState({
        isValid: false
      });
    }
  },
  render: function() {
    return (
      <div className="ob-location-finder">
        <PostalCode ref="postalcode" />
        <span>or</span>
        <Geolocation ref="geolocation" />
      </div>
    );
  }
});

module.exports = LocationFinder;