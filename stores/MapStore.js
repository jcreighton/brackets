var config = require('../config.js');
var Reflux = require('reflux');
var Actions = require('../actions/actions.js');
var Firebase = require('firebase');
var Geofire = require('geofire');
var OpenBracket = new Firebase('https://test-openbracket.firebaseio.com');
var geoFire = new Geofire(OpenBracket);
var Users = new Firebase('https://test-openbracket.firebaseio.com/users');
var Geo = require('mapbox-geocoding').setAccessToken(config.MAPBOX_GEOCODE);

var MapStore = Reflux.createStore({
  listenables: [Actions],
  onGeolocatePostalCode: function(location) {

    var handleGeocode = function(err, geocode) {
      console.log(err, geocode);
    };

    Geo.geocode('mapbox.places', location, handleGeocode);
  },
  onReverseGeocode: function (coordinates) {
    var handleReverseGeocode = function(err, geocode) {
      console.log(err, geocode);
    };

    Geo.geocode('mapbox.places', location, handleReverseGeocode);
  },
  onGeolocateCurrentLocation: function() {
    var setLocation = function(position) {
      // Get reverse geocode to set city, state
      // this.onReverseGeocode(coordinates);

      this.trigger({
        isValid: true,
        position: {
          lat: position.coords.latitude,
          long: position.coords.longitude
        },
        location: 'New York, NY'
      });
    };

    var handleError = function(err) {
      var code = err.code;

      if (code === 2 || code === 3) {
        this.trigger({
          isValid: false,
          position: null,
          location: null,
          isBlocked: true
        });
      }
    };

    navigator.geolocation.getCurrentPosition(setLocation, handleError);
  }
});

module.exports = MapStore;