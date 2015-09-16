/** @jsx React.DOM */

var React = require('react/addons');
var Input = require('./basics/basic-input.js');
var Actions = require('../../actions/actions.js');

var PostalCode = React.createClass({
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
    Actions.geolocatePostalCode(value);
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