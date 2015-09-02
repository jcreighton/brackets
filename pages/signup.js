/** @jsx React.DOM */

var React = require('react');
var SignUpForm = require('../components/forms/signup-form.js');

var SignUpPage = React.createClass({
  render: function() {
    return (
      <main className="page-sign-up">
        <SignUpForm />
      </main>
    );
  }
});

module.exports = SignUpPage;