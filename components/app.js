/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router-component');
var HomePage = require('./home/app-home.js');
var SignUpPage = require('./signup-form/app-signup-form.js');


var Locations = React.createFactory(Router.Locations);
var Location = React.createFactory(Router.Location);


var App =
  React.createClass({
    render:function(){
      return (
          <Locations path={this.props.path}>
            <Location path="/" handler={HomePage} />
            <Location path="/sign-up" handler={SignUpPage} />
          </Locations>
        )
    }
  });

module.exports = App;

