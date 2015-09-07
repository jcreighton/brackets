/** @jsx React.DOM */

var React = require('react');
var Reflux = require('reflux');
var UserStore = require('../stores/SignUpStore.js');
var Actions = require('../actions/actions.js');
var SignUpForm = require('../components/forms/signup-form.js');

var SignUpPage = React.createClass({
  getInitialState: function() {
    return {
      profile_created: false,
      location_set: false
    };
  },
  render: function() {
    return (
      <main className="page-profile-creation">
        <section className="profile">
          <div className="inner">
            <SignUpForm />
          </div>
        </section>
      </main>
    );
  }
});

module.exports = SignUpPage;