/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router-component');
var Header = require('./header/app-header.js');
var HomePage = require('./home/app-home.js');
var SignUpPage = require('./sign-up/app-signup-page.js');
var MapPage = require('./map/app-map-canvas.js');

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
            <Location path="/map" handler={MapPage} />
          </Locations>
        </div>
      </div>
    )
  }
});

module.exports = React.createFactory(App);

