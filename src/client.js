var React = require('react');
var ReactDOM = require('react-dom');
var App = React.createFactory(require('./components/pages/app.js'));

var renderTarget = document.getElementById('open-bracket-app');

// Render the main component with correct path
ReactDOM.render(
  App(),
  renderTarget
);
