/** @jsx React.DOM */

var React = require('react');
var Button = require('../buttons/app-event-button.js');
var ErrorMessage = require('../inputs/basics/app-error.js');
var MapCanvas = require('./app-map-canvas.js');

var Map = React.createClass({
  getInitialState: function() {
    return {
      markers: [],
      isVisible: false,
      errorMessage: 'Sorry, this user\'s images do not have location data.'
    }
  },
  getTextValue: function() {
    var text = this.refs.text.getDOMNode().value;

    if (text[0] === "#") {
      var hashtag = text.slice(1);
      this.getInstagramsByTag(hashtag);
    } else {
      this.getUserID(text);
    }
  },
  getUserID: function(username) {
    var _this = this;

    $.ajax({
      type: "GET",
      dataType: "jsonp",
      cache: false,
      url: 'https://api.instagram.com/v1/users/search?q=' + username + '&client_id=6313400f443044bb96b6ad4354742b1f',
      success: function(data) {
        _this.getUserInstagrams(data.data[0].id);
      }
    });
  },
  getInstagramsByTag: function(tag) {
    var url = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent?client_id=76d908c33c25411c936b94ff4e4961cb';
    this.callRecentMediaAPI(url);
  },
  getUserInstagrams: function(userID) {
    var url = 'https://api.instagram.com/v1/users/' + userID + '/media/recent/?client_id=76d908c33c25411c936b94ff4e4961cb';
    this.callRecentMediaAPI(url);
  },
  callRecentMediaAPI: function(url) {
    var _this = this;

    $.ajax({
      type: "GET",
      dataType: "jsonp",
      cache: false,
      url: url,
      success: function(data) {
        _this.createMarkers(data.data);
      },
      error: function(err) {
        this.setState({
          isVisible: true
        });
      }
    });
  },
  createMarkers: function(entries) {
    var markers = [];
    console.log(entries);
    var filterEntries = entries.filter(function(entry) {
      return (entry.location && entry.location.latitude && entry.location.longitude);
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
        var entry = filterEntries[i];

        markers.push({
          lat: entry.location.latitude,
          lng: entry.location.longitude,
          caption: entry.caption.text,
          image: entry.images.low_resolution.url,
          thumbnail: entry.images.thumbnail.url
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
            <input type="text" ref="text" placeholder="username or #hashtag" />
            <Button className="small" onClick={this.getTextValue}>Find</Button>
            <ErrorMessage isVisible={this.state.isVisible} errorMessage={this.state.errorMessage} />
            <MapCanvas markers={this.state.markers}/>
          </div>
        </section>
      </main>
    );
  }
});

module.exports = Map;