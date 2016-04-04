var React = require('react');
var classNames = require('classnames');
var PostalCode = require('../input-postalcode/input-postalcode.js');
var Geolocation = require('../input-geolocation/input-geolocation.js');
var Feedback = require('../feedback/feedback.js');

import styles from './input-location.css';

var LocationFinder = React.createClass({
  getInitialState: function() {
    return {
      isVisible: true,
      isValid: false,
      isError: false,
      isPostalcodeDisabled: false,
      isGeolocationDisabled: false,
      location: null,
      message: 'You can edit where your pin appears on the next page'
    }
  },
  propTypes: {
    defaultValue: React.PropTypes.string
  },
  disableGeolocation: function() {
    this.setState({
      isPostalcodeDisabled: false,
      isGeolocationDisabled: true
    });
  },
  disablePostalcode: function() {
    this.setState({
      isPostalcodeDisabled: true,
      isGeolocationDisabled: false
    });
  },
  isValid: function() {
    // var isValidLocation = !(_.isEmpty(this.state.userLocation));
    // console.log('isValidLocation', isValidLocation, this.state.userLocation);
    // if (!isValidLocation) {
    //   this.setState({
    //     isValid: false,
    //     isError: true,
    //     userLocation: {},
    //     errorMessage: 'You must provide a location'
    //   });
    // } else {
    //   this.setState({
    //     isValid: true,
    //     isError: false
    //   });
    // }

    // this.props.onValidation('location', {
    //   isValid: isValidLocation,
    //   value: this.state.userLocation
    // });
  },
  render: function() {
    var message = this.state.isError ? this.state.errorMessage : this.state.message;

    var classes = classNames(
      styles.between,
      {
        [styles.disabled]: this.state.isGeolocationDisabled ||
                  this.state.isPostalcodeDisabled
      }
    );

    return (
      <div className={styles.location}>
        <Feedback
          placement={'left'}
          isVisible={this.state.isVisible}
          isError={this.state.isError}
          message={message} />
        <PostalCode
          ref="postalcode"
          handleFocus={this.disableGeolocation}
          isDisabled={this.state.isPostalcodeDisabled}
          defaultValue={this.props.defaultValue}  />
        <span className={classes}>or</span>
        <Geolocation
          ref="geolocation"
          handleClick={this.disablePostalcode}
          isDisabled={this.state.isGeolocationDisabled} />
      </div>
    );
  }
});

module.exports = LocationFinder;