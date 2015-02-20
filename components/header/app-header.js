/** @jsx React.DOM */

var React = require('react');
var Link = React.createFactory(require('react-router-component').link);

var Header = React.createClass({
  getDefaultProps: function() {
    return {
      items: [
        {
          name: 'SIGN UP',
          url: '/sign-up'
        },
        {
          name: 'LOGIN',
          url: '/login'
        },
        {
          name: 'LOG IN',
          url: '/url'
        }
      ]
    };
  },
  propTypes: {
    items: React.PropTypes.array
  },
  render: function() {
    var items = items.map(function(item){
      return <Link>{item}</Link>
    })
    return (
          <nav className="ob-nav main">
            <ul>
              <li>{items}</li>
            </ul>
          </nav>
        );
      }
    });

module.exports = Header;