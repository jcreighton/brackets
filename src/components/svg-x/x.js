var React = require('react');

var XSVG = React.createClass({
  getDefaultProps: function() {
    return {
      color: '#ccc'
    }
  },
  propTypes: {
    color: React.PropTypes.string,
  },
  render: function() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0" y="0" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve">
        <line fill="none" stroke="#DF345E" stroke-width="1.78" stroke-miterlimit="10" x1="6" y1="42" x2="41.9" y2="5.9"/>
        <line fill="none" stroke="#DF345E" stroke-width="1.78" stroke-miterlimit="10" x1="41.9" y1="42" x2="6" y2="5.9"/>
      </svg>
    );
  }
});

module.exports = XSVG;