/** @jsx React.DOM */

var React = require('react');

var Test = React.createClass({
  getInitialState: function() {
    return {
      message: 'boobs & brackets'
    };
  },
  render: function() {
    return (
      <div className="boobs">
        {message}
      </div>
    );
  }
});

module.exports = Test;