/** @jsx React.DOM */

var React = require('react');

var Header = React.createClass({
  getInitialState: function() {
    return {
      item: 'Test Navigation'
    };
  },
  render: function() {
    return (
          <nav className="ob-nav main">
            <ul>
              <li>{this.state.item}</li>
            </ul>
          </nav>
        );
      }
    });

module.exports = Header;