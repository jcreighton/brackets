var React = require('react');

var ListItem = React.createClass({
  handleClick: function() {
    this.props.handleItemClick();
  },
  propTypes: {
    text: React.PropTypes.string
  },
  render: function() {
    return (
      <li onClick={this.handleClick}>{this.props.text}</li>
    );
  }
});

module.exports = ListItem;