/** @jsx React.DOM */

var React = require('react');
var Link = require('react-router-component').Link;

var Navigation = React.createClass({
  getDefaultProps: function() {
    return {
      navItems: {
        'sign up': '/sign-up',
        'sign in': '/sign-in'
      }
    }
  },
  propTypes: {
    navItems: React.PropTypes.object.isRequired,
  },
  render: function() {
    return (
      <li><Link href="/sign-up">Sign Up</Link></li>
    );
  }
});

module.exports = Navigation;