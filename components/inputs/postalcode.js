/** @jsx React.DOM */

var React = require('react/addons');
var Input = require('./basics/basic-input.js');

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
  handleChange: function() {
    this.props.handleChange();
  },
  handleBlur: function() {
    var value = this.refs.postalcode.getDOMNode().value;
    this.props.handleBlur(value);
  },
  render: function() {
    return (
      <div className="ob-input postalcode">
        <div className="input">
          <label>{this.props.label}</label>
          <Input
            type="text"
            ref="postalcode"
            onInputChange={this.handleChange}
            onInputBlur={this.handleBlur}
            placeholder={this.props.placeholder} />
        </div>
      </div>
    );
  }
});

module.exports = PostalCode;