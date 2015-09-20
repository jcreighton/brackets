/** @jsx React.DOM */

var React = require('react/addons');
var Input = require('./basics/basic-input.js');
var classNames = require('classnames');

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
  handleFocus: function() {
    if (this.props.handleFocus) {
      this.props.handleFocus();
    }
  },
  handleChange: function() {
    if (this.props.handleChange) {
      this.props.handleChange();
    }
  },
  handleGeocodePostalCode: function(postalcode) {
    var value = this.refs.postalcode.getDOMNode().value;
    if (value) {
      Actions.geolocatePostalCode(postalcode);
    }
  },
  render: function() {
    var classes = classNames(
      'input',
      {
        'disabled': this.props.isDisabled
      }
    );

    return (
      <div className="ob-input postalcode">
        <div className={classes}>
          <label>{this.props.label}</label>
          <Input
            type="text"
            ref="postalcode"
            onInputChange={this.handleChange}
            onInputFocus={this.handleFocus}
            onInputBlur={this.handleGeocodePostalCode}
            placeholder={this.props.placeholder} />
        </div>
      </div>
    );
  }
});

module.exports = PostalCode;