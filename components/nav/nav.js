/** @jsx React.DOM */

var React = require('react');
var Login = require('../forms/login-form.js');
var Link = require('react-router-component').Link;

var Navigation = React.createClass({
  getDefaultProps: function() {
    return {
      navItems: {
        'sign up': '/sign-up'
      }
    }
  },
  propTypes: {
    navItems: React.PropTypes.object.isRequired,
  },
  render: function() {
    return (
      <nav>
        <ul>
          <li><Link href="/sign-up">Sign Up</Link></li>
          <Login/>
        </ul>
        {this.props.children}
      </nav>
    );
  }
});

module.exports = Navigation;