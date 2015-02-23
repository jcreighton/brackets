/** @jsx React.DOM */

var React = require('react');
var Link = require('react-router-component').Link;

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Where are all the lady devs?</h2>
      </div>
    );
  }
});

module.exports = Home;