/** @jsx React.DOM */

var React = require('react');
var Link = require('react-router-component').Link;

var Home = React.createClass({
  getDefaultProps: function() {
    return{
      message: 'An open community for lady developers',
      username: 'jenn'
    }
  },
  propTypes: {
    message: React.PropTypes.string
  },
  render: function() {
    return (
      <div>
        <h2>{this.props.message}</h2>
        <span>{this.props.username}</span>
      </div>
    );
  }
});

module.exports = Home;