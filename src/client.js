var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('./routes.js');

var renderTarget = document.getElementById('open-bracket-app');

ReactDOM.render(
  Router,
  renderTarget
);
