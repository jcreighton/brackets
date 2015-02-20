/** @jsx React.DOM */

var React = require('react');
var Link = React.createFactory(require('react-router-component').Link);

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <h2>REACT FOR THE WIN!</h2>
        <Link href="/sign-up">Sign Up</Link>
      </div>
    );
  }
});

module.exports = Home;