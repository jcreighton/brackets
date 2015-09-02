/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router-component');
var Header = require('../components/header/header.js');
var HomePage = React.createElement(require('./home.js'));
var SignUpPage = React.createElement(require('./signup.js'));

var Locations = Router.Locations;
var Location = Router.Location;

var App = React.createClass({
  render: function(){
    return (
      <div>
        <Header />
        <div className="main">
          <Locations path={this.props.path}>
            <Location path="/" handler={HomePage} />
            <Location path="/sign-up" handler={SignUpPage} />
          </Locations>
        </div>
      </div>
    )
  }
});

module.exports = React.createFactory(App);

