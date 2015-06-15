/** @jsx React.DOM */

var React = require('react');
var SignUpForm = require('../forms/app-signup-form.js');
var LocationFinder = require('../forms/app-location.js');

var SignUpPage = React.createClass({
  render: function() {
    return (
      <main className="page-sign-up">
        <SignUpForm />
        <LocationFinder />
      </main>
    );
  }
});

module.exports = SignUpPage;