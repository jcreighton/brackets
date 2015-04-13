/** @jsx React.DOM */

var React = require('react');
var Button = require('../buttons/app-event-button.js');
var ErrorMessage = require('../inputs/basics/app-error.js');
var MapCanvas = require('./app-map-canvas.js');
var Firebase = require('firebase');
var LocListRef = new Firebase('https://glowing-inferno-6073.firebaseio.com/thedogist');

var Map = React.createClass({
  getInitialState: function() {
    return {
      markers: [],
      isVisible: false,
      errorMessage: 'Sorry, this user\'s images do not have location data.'
    }
  },
  componentDidMount: function() {
    this.counter = 0;
    this.data = [];
  },
  getTextValue: function() {
    var text = this.refs.text.getDOMNode().value;
    if (text === 'thedogist') {
      this.getDogistMarkers();
      return;
    }
    var firstLetter = text[0];
    var value = text.slice(1);

    if (firstLetter === "#") {
      this.getInstagramsByTag(value);
    } else {
      this.getUserID(value);
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
        if (_this.counter < 3) {
          _this.counter++;
          _this.data = _this.data.concat(data.data);
          if (data.pagination.next_url) {
            _this.callRecentMediaAPI(data.pagination.next_url);
          } else {
            _this.createMarkers(_this.data);
            _this.counter = 0;
            _this.data = [];
            return;
          }
        } else {
          _this.createMarkers(_this.data);
          _this.counter = 0;
          _this.data = [];
        }
      },
      error: function(err) {
        _this.setState({
          isVisible: true
        });
      }
    });
  },
  getDogistMarkers: function() {
    var _this = this;
    var clean = [];
    // call database to get locations
    LocListRef.once('value', function(db) {
      var snapshot = db.val();
      for (obj in snapshot) {
        clean.push(snapshot[obj]);
      }
      // update state
      _this.setState({
        markers: clean
      });
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  },
  getLocations: function(data) {
    var captions = [];

    for (var i = 0; i < data.length; i++) {
      var temp = data[i].caption.text.split(', ');
      var state = temp[4] ? temp[4].slice(0, 2) : '';
      captions.push({
        id: data[i].id,
        location: temp[2] + ' ' + temp[3] + ' ' + state,
        caption: data[i].caption.text,
        image: data[i].images.low_resolution.url,
        thumbnail: data[i].images.thumbnail.url
      });
    }

    // update state
    this.setState({
      geocodes: captions
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
            <input type="text" ref="text" placeholder="@username or #hashtag" />
            <Button className="small" onClick={this.getTextValue}>Find</Button>
            <ErrorMessage isVisible={this.state.isVisible} errorMessage={this.state.errorMessage} />
            <MapCanvas markers={this.state.markers} geocodes={this.state.geocodes}/>
          </div>
        </section>
      </main>
    );
  }
});

module.exports = Map;