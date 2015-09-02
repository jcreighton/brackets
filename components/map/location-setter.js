/** @jsx React.DOM */

var React = require('react');

var LocationFinder = React.createClass({
  getInitialState: function() {
    return {
      message: 'Set your location'
    };
  },
  render: function() {
    return (
      <div className="ob-location-finder">
        <h2>{this.state.message}</h2>
        <ul>
          <li>
            <span>Use current location</span>
          </li>
          <li>
            <span>Find location on map</span>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = LocationFinder;