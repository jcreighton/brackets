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
      zoom: this.props.zoom,
      maxZoom: 17
    };

    this.map = new google.maps.Map(element, mapOptions);
  },
  componentDidUpdate: function() {
    if (this.props.markers.length > 0) {
      console.log('markers', this.props.markers);
      this.addMarkers();

      // update boundaries based on all image locations
      var bounds = new google.maps.LatLngBounds();

      for (var i = 0; i < this.props.markers.length; i++) {
        var marker = this.props.markers[i];
        var latlng = new google.maps.LatLng(marker.lat, marker.lng);
        bounds.extend(latlng);
      }

      this.map.fitBounds(bounds);
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
        icon: {
          url: this.props.markers[i].thumbnail,
          scaledSize: new google.maps.Size(32, 32),
          origin: new google.maps.Point(0,0),
          anchor: new google.maps.Point(0, 32)
        },
        map: this.map
      });

      // var infowindow = new google.maps.InfoWindow({
      //   content: contentString
      // });

      // google.maps.event.addListener(marker, 'click', function() {
      //   infowindow.open(map,marker);
      // });

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