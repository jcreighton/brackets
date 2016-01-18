var React = require('react');
var SignUpForm = require('../forms/signup-form.js');

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