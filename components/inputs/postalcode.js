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
      isValid: false
    }
  },
  getDefaultProps: function() {
    return {
      label: 'Postal Code'
    }
  },
  propTypes: {
    label: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    message: React.PropTypes.string
  },
  findLatLong: function() {
    var value = this.refs.postalcode.getDOMNode().value;
    // geocode postalcode
    // call isValid
  },
  isValid: function() {


    if (value) {
      this.setState({
        isValid: true
      });
    } else {
      this.setState({
        isValid: false
      });
    }

    return {
      postalcode: (value),
      value: value
    };
  },
  render: function() {
    return (
      <div className="ob-input postalcode">
        <div className="input">
          <label>{this.props.label}</label>
          <Input type="text" ref="postalcode" onInputBlur={this.isValid} placeholder={this.props.placeholder} />
        </div>
      </div>
    );
  }
});

module.exports = PostalCode;