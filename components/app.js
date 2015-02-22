/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router-component');
var Header = require('./header/app-header.js');
var HomePage = require('./home/app-home.js');
var SignUpPage = require('./signup-form/app-signup-form.js');

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

module.exports = App;

