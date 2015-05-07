/** @jsx React.DOM */

var React = require('react');
var Link = require('react-router-component').Link;
// var Header = require();
var EmailSignUp = require('../forms/app-email-signup-form.js');

var Home = React.createClass({
  getDefaultProps: function() {
    return{
      message: 'An open community for lady developers',
    }
  },
  propTypes: {
    message: React.PropTypes.string
  },
  render: function() {
    return (
      <main className="page-home">
        <section className="mission">
          <div className="inner">
            <figure className="lady one"><img src="/img/lady.png" /></figure>
            <figure className="lady two"><img src="/img/lady.png" /></figure>
            <h1>Connecting Lady Developers</h1>
            <figure className="bracket"><img src="/img/bracket.png" /></figure>
          </div>
        </section>
        <div className="arrow-container">
          <div className="arrow"><img src="/img/arrow-down.png" /></div>
        </div>
        <section className="why">
          <div className="inner">
            <h1>Raise Your Hand</h1>
            <p>20% of developers are women. It can be difficult to connect to one another. Let's change that. Let's raise our hands so we can be visible to each other and support each other.</p>
            <figure className="people"><img src="/img/people.png" /></figure>
          </div>
        </section>
        <section className="how">
          <div className="inner">
            <h1>Find Your Community</h1>
            <p>Do you need a mentor? Or help with a job search? Or maybe someone to grab coffee or lunch with? You'll be able to find fellow lady developers near you, make connections and build your own awesome community.</p>
            <div className="map-container">
              <figure className="map"><img src="/img/map-block.png" /></figure>
              <span className="location"></span>
              <span className="location"></span>
              <span className="location"></span>
              <span className="location"></span>
              <span className="location"></span>
            </div>
          </div>
        </section>
        <section className="coming-soon">
          <div className="inner">
            <h1>Launching <span className="launch-date">June 2015</span></h1>
          </div>
        </section>
        <section className="email-suggestion">
          <div className="inner">
            <figure className="envelope"><img src="/img/envelope.png" /></figure>
            <h1>Sign Up For Updates</h1>
            <p>We'll notify you when Open Bracket launches</p>
            <EmailSignUp />
          </div>
        </section>
      </main>
    );
  }
});

module.exports = Home;