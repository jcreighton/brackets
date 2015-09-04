/** @jsx React.DOM */

var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router-component');
var Navigatable = Router.NavigatableMixin;
var Header = require('../components/header/header.js');
var HomePage = React.createElement(require('./home.js'));
var SignUpPage = React.createElement(require('./signup.js'));
var UserPage = React.createElement(require('./home.js'));

var Actions = require('../actions/actions.js');
var LocationStore = require('../stores/LocationStore.js');

var Locations = Router.Locations;
var Location = Router.Location;

var App = React.createClass({
  mixins: [Reflux.connect(LocationStore)],
  componentDidMount: function () {
    Actions.router(this.refs.router);
  },
  render: function(){
    return (
      <div>
        <Header />
        <div className="main">
          <Locations ref="router" path={this.props.path}>
            <Location path="/" handler={HomePage} />
            <Location path="/sign-up" handler={SignUpPage} />
            <Location path="/:username" handler={UserPage} />
          </Locations>
        </div>
      </div>
    )
  }
});

module.exports = React.createFactory(App);

