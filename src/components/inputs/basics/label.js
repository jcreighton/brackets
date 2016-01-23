var React = require('react');

var styles = require('./label.css');

var Label = React.createClass({
  render: function() {
    return (
      <label className={styles.label} for={this.props.forInput}>
        {this.props.children}
      </label>
    );
  }
});

module.exports = Label;