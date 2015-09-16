/** @jsx React.DOM */

var React = require('react/addons');
var Reflux = require('reflux');
var Input = require('./basics/basic-input.js');
var MapStore = require('../../stores/MapStore.js');
var Actions = require('../../actions/actions.js');

var PostalCode = React.createClass({
  mixins: [Reflux.connect(MapStore)],
  getInitialState: function() {
    return {
      isValid: false,
      postalcode: null
    }
  },
  getDefaultProps: function() {
    return {
      label: 'Postal Code'
    }
  },
  propTypes: {
    label: React.PropTypes.string,
    placeholder: React.PropTypes.string
  },
  handleGeocodePostalCode: function() {
    var value = this.refs.postalcode.getDOMNode().value;
    // Geocode postalcode
    Actions.geolocatePostalCode(value);
  },
  isValid: function() {
    return {
      postalcode: this.state.isValid,
      value: this.state.postalcode
    };
  },
  render: function() {
    return (
      <div className="ob-input postalcode">
        <div className="input">
          <label>{this.props.label}</label>
          <Input type="text" ref="postalcode" onInputBlur={this.handleGeocodePostalCode} placeholder={this.props.placeholder} />
        </div>
      </div>
    );
  }
});

module.exports = PostalCode;