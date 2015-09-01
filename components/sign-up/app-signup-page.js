/** @jsx React.DOM */

var React = require('react');
var SignUpForm = require('../forms/app-signup-form.js');

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