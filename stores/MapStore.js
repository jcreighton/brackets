var Reflux = require('reflux');
var Actions = require('../actions/actions.js');
var Firebase = require('firebase');
var OpenBracket = new Firebase('https://test-openbracket.firebaseio.com');
var GeoFire = new GeoFire(OpenBracket);
var Users = new Firebase('https://test-openbracket.firebaseio.com/users');
var MapBoxGeocode = require('echonestjs');

var MapStore = Reflux.createStore({
  listenables: [Actions],
  onGeocode: function() {
    console.log('geocode');
  }
});