/** @jsx React.DOM */

var React = require('react');
var PostalCode = require('../inputs/postalcode.js');
var Geolocation = require('../inputs/geolocation.js');
var Feedback = require('./basics/feedback.js');

var LocationFinder = React.createClass({
  getInitialState: function() {
    return {
      isVisible: true,
      isValid: true,
      isError: false,
      message: 'You can edit where your pin appears on the next page'
    }
  },
  isValid: function() {
    var postalCode = this.refs.postalcode.isValid();
    var geolocation = this.refs.geolocation.isValid();

    var isValidLocation = postalcode || geolocation;

    if (isValidLocation) {
      this.setState({
        isValid: true,
        location: isValidLocation
      });
    } else if (postcode) {
       this.setState({
        isValid: false
      });
    }
  },
  render: function() {
    return (
      <div className="ob-input location">
        <Feedback isVisible={this.state.isVisible} isError={this.state.isError} message={this.state.message} />
        <PostalCode ref="postalcode" />
        <span className="or">or</span>
        <Geolocation ref="geolocation" />
      </div>
    );
  }
});

module.exports = LocationFinder;