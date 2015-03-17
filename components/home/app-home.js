/** @jsx React.DOM */

var React = require('react');
var Link = require('react-router-component').Link;
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
            <h1>Some Copy About Why</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam risus libero, a consequat est dignissim quis.</p>
            <figure className="people"><img src="/img/people.png" /></figure>
          </div>
        </section>
        <section className="how">
          <div className="inner">
            <h1>How It Works</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam risus libero, a consequat est dignissim quis.</p>
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
            <h1>Launching <span className="may-2015">May 2015</span></h1>
          </div>
        </section>
        <section className="email-suggestion">
          <div className="inner">
            <figure className="envelope"><img src="/img/envelope.png" /></figure>
            <h1>Join Us</h1>
            <p>Sign up for email updates or send us a suggestion</p>
            <EmailSignUp />
          </div>
        </section>
      </main>
    );
  }
});

module.exports = Home;