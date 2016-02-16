var React = require('react');

var styles = require('./button.css');

var Button = React.createClass({
  propTypes: {
    className: React.PropTypes.string,
    onClick: React.PropTypes.func
  },
  handleOnClick: function() {
    this.props.onClick();
  },
  render: function() {
    return (
      <div className={styles.button} onClick={this.handleOnClick}>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Button;