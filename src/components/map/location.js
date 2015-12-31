var React = require('react');
var Zipcode = require('../inputs/zipcode.js');

var LocationFinder = React.createClass({
  getInitialState: function() {
    return {
      message: 'Set your location'
    };
  },
  render: function() {
    return (
      <div className="ob-location-finder">
        <Zipcode />
        <CurrentLocation />
      </div>
    );
  }
});

module.exports = LocationFinder;