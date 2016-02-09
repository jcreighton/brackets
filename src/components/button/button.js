var React = require('react');

var styles = require('./button.css');

var Button = React.createClass({
  propTypes: {
    className: React.PropTypes.string,
    onClick: React.PropTypes.func
  },
  render: function() {
    return (
      <button className={styles.button} onClick={this.props.onClick}>
        <a>{this.props.children}</a>
      </button>
    )
  }
});

module.exports = Button;