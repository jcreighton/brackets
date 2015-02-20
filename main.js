/** @jsx React.DOM */

var React = require('react');
var App = require('./components/app.js');

// Snag the initial state that was passed from the server side
var initialState = JSON.parse(document.getElementById('initial-state').innerHTML);
console.log('before');
// Render the components, picking up where react left off on the server
React.renderComponent(
  <App/>,
  document.body
);
console.log('after');