var React = require('react');
var Checkbox = require('./checkbox.js');

var Geolocation = React.createClass({
  getInitialState: function() {
    return {
      isValid: false
    }
  },
  getDefaultProps: function() {
    return {
      text: 'Use my current location'
    };
  },
  propTypes: {
    text: React.PropTypes.string
  },
  isValid: function(isValid, position) {
    var state;
    var returnObject = {
      geolocation: isValid
    };

    if (isValid) {
      var location = [position.coords.latitude, position.coords.longitude];
      state = {
        isValid: true,
        location: location
      };

      returnObject.location = location;
    } else {
      state = {
        isValid: false
      };
    }

    this.setState(state);

    return returnObject;
  },
  handleGeolocation: function() {
    var setLocation = function(position) {
      this.isValid(true, position);
      console.log('position', position);
    };

    var handleError = function(err) {

      console.log(err);
      // check error is 2 or 3, then something went wrong
    };

    navigator.geolocation.getCurrentPosition(setLocation, handleError);
  },
  render: function() {
    var classes = 'ob-checkbox ' + this.props.className;

    return (
      <div className="ob-geolocation">
        <Checkbox type="tag" name="geolocation" className="geolocation" value="geolocation" text={this.props.text} handleChange={this.handleGeolocation} />
      </div>
    );
  }
});

module.exports = Geolocation;