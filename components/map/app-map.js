/** @jsx React.DOM */

var React = require('react');
var Button = require('../buttons/app-event-button.js');
var ErrorMessage = require('../inputs/basics/app-error.js');
var MapCanvas = require('./app-map-canvas.js');
var Instagram = require('instagram-node-lib');

// Configure Instagram
Instagram.set('client_id', '76d908c33c25411c936b94ff4e4961cb');
Instagram.set('client_secret', 'a80c12f0d0b34d67b5b62b933c21c909');

var Map = React.createClass({
  getInitialState: function() {
    return {
      markers: [],
      isVisible: false,
      errorMessage: 'Sorry, this user\'s images do not have location data.'
    }
  },
  getUserID: function() {
    var _this = this;
    var username = this.refs.username.getDOMNode().value;

    $.ajax({
      type: "GET",
      dataType: "jsonp",
      cache: false,
      url: 'https://api.instagram.com/v1/users/search?q=' + username + '&client_id=6313400f443044bb96b6ad4354742b1f',
      success: function(data) {
        _this.getInstagramLocations(data.data[0].id);
      }
    });
  },
  getInstagramLocations: function(userID) {
    var _this = this;

    $.ajax({
      type: "GET",
      dataType: "jsonp",
      cache: false,
      url: 'https://api.instagram.com/v1/users/' + userID + '/media/recent/?client_id=76d908c33c25411c936b94ff4e4961cb',
      success: function(data) {
        _this.createMarkers(data.data);
      }
    });
  },
  createMarkers: function(entries) {
    var markers = [];

    var filterEntries = entries.filter(function(entry) {
      return (entry.location);
    });

    // if location doesn't exist, exit loop & show error message
    if (filterEntries.length == 0) {
      this.setState({
        isVisible: true
      });
    } else {
      // else make sure error message doesn't show
      this.setState({
        isVisible: false
      });

      // & extract lat/long to create array of markers
      for (var i = 0; i < filterEntries.length; i++) {
        var location = filterEntries[i].location;

        markers.push({
          lat: location.latitude,
          lng: location.longitude
        });
      }
    }

    //update state
    this.setState({
      markers: markers
    });
  },
  render: function() {
    return (
      <main className="page-map">
        <section className="map">
          <div className="inner">
            <input type="text" ref="username" />
            <Button className="small" onClick={this.getUserID}>Find</Button>
            <ErrorMessage isVisible={this.state.isVisible} errorMessage={this.state.errorMessage} />
            <MapCanvas markers={this.state.markers}/>
          </div>
        </section>
      </main>
    );
  }
});

module.exports = Map;