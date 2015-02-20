/** @jsx React.DOM */

var React = require('react');
var App = React.createFactory(require('./components/app.js'));

// Snag the initial state that was passed from the server side
var initialState = JSON.parse(document.getElementById('initial-state').innerHTML);

// Render the components, picking up where react left off on the server
React.render(
  App(initialState),
  document.getElementById('open-bracket-app')
);
