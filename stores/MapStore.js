var config = require('../config.js');
var Reflux = require('reflux');
var Actions = require('../actions/actions.js');
var Firebase = require('firebase');
var Geofire = require('geofire');
var OpenBracket = new Firebase('https://test-openbracket.firebaseio.com');
var geoFire = new Geofire(OpenBracket);
var Users = new Firebase('https://test-openbracket.firebaseio.com/users');
var MapboxClient = require('mapbox/lib/services/geocoder');
var client = new MapboxClient(config.MAPBOX_GEOCODE);

// var Geo = require('mapbox-geocoding');
// Geo.setAccessToken(config.MAPBOX_GEOCODE);

var MapStore = Reflux.createStore({
  listenables: [Actions],
  onGeolocatePostalCode: function(postalcode) {

    var handleGeocode = function(err, geocode) {
      if (err) {
        this.trigger({
          isValid: false,
          postalcode: null
        });
      } else {
        console.log('geocodeForward', geocode);
        var coordinates = geocode.features[0].center;
        this.onReverseGeocode(coordinates);
      }
    };

    client.geocodeForward(
      postalcode,
      handleGeocode.bind(this)
    );
  },
  onReverseGeocode: function(coordinates) {
    console.log('coordinates', coordinates);
    var location = {
      latitude: coordinates[0],
      longitude: coordinates[1]
    };

    var handleReverseGeocode = function(err, geocode) {
      console.log('err', err, 'geocode', geocode);
    };
    console.log('location', location);
    client.geocodeReverse(
      location,
      handleReverseGeocode.bind(this)
    );
  },
  onGeolocateCurrentLocation: function() {
    var setLocation = function(position) {
      // Get reverse geocode to set city, state
      // this.onReverseGeocode(coordinates);
      console.log('position', position);
      this.trigger({
        isValid: true,
        position: {
          lat: position.coords.latitude,
          long: position.coords.longitude
        },
        location: 'New York, NY',
        isBlocked: false
      });
    };

    var handleError = function(err) {
      console.log('geolocation error: ', err);
      var code = err.code;
      console.log('this', this);
      if (code === 1 || code === 2) {
        this.trigger({
          isValid: false,
          position: null,
          location: null,
          isBlocked: true
        });
      } else {
        this.trigger({
          isValid: false,
          position: null,
          location: null,
          isBlocked: false,
          errorMessage: 'Sorry, the server is having issues.'
        });
      }
    };

    navigator.geolocation.getCurrentPosition(
      setLocation.bind(this),
      handleError.bind(this),
      {maximumAge: 150000}
    );
  }
});

module.exports = MapStore;