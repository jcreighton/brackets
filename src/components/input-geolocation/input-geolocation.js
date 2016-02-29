var React = require('react');
var classNames = require('classnames');
var Checkbox = require('./checkbox.js');

var Geolocation = React.createClass({
  getDefaultProps: function() {
    return {
      id: 'geolocation',
      name: 'geolocation',
      value: 'geolocation',
      text: 'Use current location'
    };
  },
  propTypes: {
    text: React.PropTypes.string
  },
  geolocate: function() {
    // Geolocate
  },
  render: function() {
    return (
      <Checkbox
        {...this.props}
        returnValue={(node) => {
            if (node != null) {
              this.input = node
            }
          }
        }
        onChange={this.geolocate}
      />
    );
  }
});

module.exports = Geolocation;