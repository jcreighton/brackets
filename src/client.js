var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./routes.js');
var { Provider } = require('react-redux');
var configureStore = require('./store/configureStore.js');

var renderTarget = document;

ReactDOM.render(
  <Provider store={configureStore}>
    {routes}
  </Provider>,
  renderTarget
);
