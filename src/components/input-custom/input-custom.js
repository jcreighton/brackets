var React = require('react');

var Label = require('../label/label.js');

var styles = require('./input-custom.css');

var InputCustom = React.createClass({
  handleOnFocus: function() {
    if (this.props.onFocus) {
      this.props.onFocus(this.input.value);
    }
  },
  handleOnBlur: function() {
    console.log('handleOnBlur');
    if (this.props.onBlur) {
      console.log('this.input', this.input.value);
      this.props.onBlur(this.input.value);
    }
  },
  handleOnChange: function() {
    console.log('handleOnChange');
    if (this.props.onBlur) {
      console.log('this.input', this.input.value);
      this.props.onBlur(this.input.value);
    }
  },
  render: function() {
    return (
      <div className={styles.input}>
        <Label>{this.props.label}</Label>
        <input
          className={styles.input}
          type={this.props.type}
          name={this.props.name}
          ref={(node) => this.input = node}
          onFocus={this.handleOnFocus}
          onBlur={this.handleOnBlur}
          onChange={this.handleOnChange}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
});

module.exports = InputCustom;



