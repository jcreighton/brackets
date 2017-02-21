var React = require('react');

var Label = require('../label/label.js');
var Input = require('../input/input.js');

var styles = require('./input-custom.css');

var InputCustom = React.createClass({
  render: function() {
    const { label } = this.props;

    return (
      <div className={styles.input}>
        <Label>{label}</Label>
        <Input {...this.props} />
      </div>
    );
  }
});

module.exports = InputCustom;



