var React = require('react');
var Firebase = require('firebase');
var LocListRef = new Firebase('https://glowing-inferno-6073.firebaseio.com/thedogist');

var Map = React.createClass({
  getDefaultProps: function() {
    return {
      lat: 40.7470,
      lng: -73.9860,
      zoom: 12,
      markers: [],
      geocodes: []
    }
  },
  componentDidMount: function() {
    // this.markers = [];
    // this.geocodes = [];
    // var element = this.getDOMNode();

    // var mapOptions = {
    //   center: {
    //     lat: this.props.lat,
    //     lng: this.props.lng
    //   },
    //   zoom: this.props.zoom,
    //   maxZoom: 17
    // };

    // this.map = new google.maps.Map(element, mapOptions);
  },
  componentDidUpdate: function() {
    // this.removeMarkers();

    // if (this.props.markers.length > 0) {
    //   this.addMarkers();

    //   // update boundaries based on all image locations
    //   var bounds = new google.maps.LatLngBounds();

    //   for (var i = 0; i < this.props.markers.length; i++) {
    //     var marker = this.props.markers[i];
    //     var latlng = new google.maps.LatLng(marker.lat, marker.lng);
    //     bounds.extend(latlng);
    //   }

    //   this.map.fitBounds(bounds);
    // }
  },
  addMarkers: function(markers) {
    // var _this = this;
    // var markers = markers || this.props.markers;

    // for (var i = 0; i < markers.length; i++) {
    //   var currMarker = markers[i];
    //   var marker = new google.maps.Marker({
    //     position: {
    //       lat: currMarker.lat,
    //       lng: currMarker.lng
    //     },
    //     // draggable: true,
    //     icon: {
    //       url: currMarker.thumbnail,
    //       scaledSize: new google.maps.Size(32, 32),
    //       origin: new google.maps.Point(0,0),
    //       anchor: new google.maps.Point(0, 32)
    //     },
    //     id: currMarker.id,
    //     html: '<div class="infopane-instagram"><img src="' + currMarker.image + '"><span class="caption">' + currMarker.caption + '</span></div>',
    //     map: this.map
    //   });

    //   var infopane = new google.maps.InfoWindow({
    //     content: ''
    //   });

    //   google.maps.event.addListener(marker, 'click', function(e) {
    //     infopane.setContent(this.html);
    //     infopane.open(_this.map, this);
    //   });

    //   marker.setMap(this.map);

    //   this.markers.push(marker);
    // }
  },
  removeMarkers: function() {
    // for (var i = 0; i < this.markers.length; i++) {
    //   google.maps.event.clearListeners(this.markers[i], 'click');
    //   this.markers[i].setMap(null);
    // }
    // this.markers = [];
  },
  render: function() {
    return (
      <div className="map-canvas"></div>
    );
  }
});

module.exports = Map;