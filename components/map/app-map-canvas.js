/** @jsx React.DOM */

var React = require('react');

var Map = React.createClass({
  getDefaultProps: function() {
    return {
      lat: 40.7470,
      lng: -73.9860,
      zoom: 12,
      markers: []
    }
  },
  componentDidMount: function() {
    this.markers = [];
    var element = this.getDOMNode();

    var mapOptions = {
      center: {
        lat: this.props.lat,
        lng: this.props.lng
      },
      zoom: this.props.zoom
    };

    this.map = new google.maps.Map(element, mapOptions);
  },
  // componentWillUpdate: function(nextProps) {
  //   if (this.) {

  //   }
  // },
  componentDidUpdate: function() {
    if (this.props.markers.length > 0) {
      this.addMarkers();
    } else {
      this.removeMarkers();
    }
  },
  addMarkers: function() {
    var _this = this;

    for (var i = 0; i < this.props.markers.length; i++) {
      var marker = new google.maps.Marker({
        position: {
          lat: this.props.markers[i].lat,
          lng: this.props.markers[i].lng
        },
        map: this.map
      });

      marker.setMap(this.map);

      this.markers.push(marker);
    }
  },
  removeMarkers: function() {
    for (var i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(null);
    }
    this.markers = [];
  },
  render: function() {
    return (
      <div className="map-canvas"></div>
    );
  }
});

module.exports = Map;