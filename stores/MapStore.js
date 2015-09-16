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
          isValid: false
        });
      } else {
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
    var location = {
      longitude: coordinates[0],
      latitude: coordinates[1]
    };

    var handleReverseGeocode = function(err, geocode) {
      if (err) {
        this.trigger({
          isValid: false,
          userLocation: null
        });
      } else {
        var geocodeContext = geocode.features[0].context;
        var userLocation = {
          position: location,
          city: geocodeContext[0].text,
          postalcode: geocodeContext[1].text,
          state: geocodeContext[2].text,
          country: geocodeContext[3].text
        };
      }

      this.trigger({
        isValid: true,
        userLocation: userLocation
      });
    };

    client.geocodeReverse(
      location,
      handleReverseGeocode.bind(this)
    );
  },
  onGeolocateCurrentLocation: function() {
    var setLocation = function(position) {
      // Get reverse geocode to set city, state
      var coordinates = [
        position.coords.longitude,
        position.coords.latitude
      ];

      this.onReverseGeocode(coordinates);
    };

    var handleError = function(err) {
      console.log('geolocation error: ', err);
      var code = err.code;
      console.log('this', this);
      if (code === 1 || code === 2) {
        this.trigger({
          isValid: false,
          isBlocked: true
        });
      } else {
        this.trigger({
          isValid: false,
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