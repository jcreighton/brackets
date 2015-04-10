/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router-component');
// var Header = require('./header/app-header.js');
var HomePage = require('./home/app-home.js');
var ProfilePage = require('./home/app-home.js');
var SignUpPage = require('./forms/app-signup-form.js');
var InstagramMapPage = require('./map/app-instagram.js');

var Locations = Router.Locations;
var Location = Router.Location;

var App = React.createClass({
  render: function(){
    return (
      <div>
        <div className="main">
          <Locations path={this.props.path}>
            <Location path="/" handler={HomePage} />
            <Location path="/sign-up" handler={SignUpPage} />
            <Location path="/:username/profile" handler={ProfilePage} />
            <Location path="/map" handler={InstagramMapPage} />
          </Locations>
        </div>
      </div>
    )
  }
});

module.exports = App;

