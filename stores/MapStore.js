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
      var state = {};
      var isError = (err || (geocode.features.length < 1));

      if (isError) {
        state = {
          isValid: false,
          isError: true,
          errorMessage: 'We\'re having an issue finding that location',
          userLocation: null
        };
      } else {
        var coordinates = geocode.features[0].center;
        this.onReverseGeocode(coordinates);
      }

      this.trigger(state);
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
          isError: true,
          errorMessage: 'We\'re having an issue finding that location',
          userLocation: null
        });
      } else {
        var geocodeContext = geocode.features[0].context;
        var userLocation = {};

        function createUserLocation(context) {
          var end = context.id.indexOf('.');
          var type = context.id.slice(0, end);
          userLocation[type] = context.text;
        };

        geocodeContext.forEach(createUserLocation);

        userLocation.position = location;
      }

      this.trigger({
        isValid: true,
        isError: false,
        message: 'Your location has been found!',
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
      this.trigger({
        isGeolocationBlocked: false
      });

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
          isError: false,
          isGeolocationBlocked: true
        });
      } else {
        this.trigger({
          isValid: false,
          isError: true,
          isGeolocationBlocked: false,
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