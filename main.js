var React = require('react');
var App = require('./components/app.js');

var renderTarget = document.getElementById('open-bracket-app');

// Render the main component with correct path
React.render(
    App({path: window.location.pathname}),
    renderTarget
);
