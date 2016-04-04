var React = require('react');
var classNames = require('classnames');
var Checkbox = require('../input-checkbox/input-checkbox.js');

import styles from './input-geolocation.css';

var Geolocation = React.createClass({
  getInitialState: function() {
    return {
      location: null,
      isDisabled: false
    }
  },
  getDefaultProps: function() {
    return {
      id: 'geolocation',
      name: 'geolocation',
      value: 'geolocation',
      label: 'Current location',
      isDisabled: false
    };
  },
  propTypes: {
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    value: React.PropTypes.string,
    label: React.PropTypes.string,
    isDisabled: React.PropTypes.bool
  },
  geolocate: function() {
    let isChecked = this.input.checked;

    var setGeolocation = (position) => {
      console.log(position.coords.latitude, position.coords.longitude);
      this.setState({
        location: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        },
        isDisabled: false
      });
    };

    var disableGeolocation = (error) => {
      this.setState({
        location: null,
        isDisabled: true
      });
    };

    if (isChecked) {
      navigator.geolocation.getCurrentPosition(setGeolocation, disableGeolocation);
    }
  },
  isValid: function() {
    return {
      name: this.props.name || this.props.type,
      isValid: this.state.location,
      value: this.state.location
    };
  },
  render: function() {
    return (
      <div className={styles.geolocation}>
        <Checkbox
          {...this.props}
          isDisabled={this.props.isDisabled || this.state.isDisabled}
          returnValue={(node) => {
              if (node != null) {
                this.input = node
              }
            }
          }
          onChange={this.geolocate}
        />
      </div>
    );
  }
});

module.exports = Geolocation;