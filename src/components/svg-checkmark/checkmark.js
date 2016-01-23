var React = require('react');

var CheckMarkSVG = React.createClass({
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
        <polyline fill="none" stroke="#50AFAD" stroke-width="2" stroke-miterlimit="10" points="0.8 28 17.4 40 46.1 5.9 "/>
      </svg>
    );
  }
});

module.exports = CheckMarkSVG;