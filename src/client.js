import React from 'react';
import { render } from 'react-dom';
// import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import store from './store/configureStore';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/root';

// const history = syncHistoryWithStore(browserHistory, store, { selectLocationState: (appState) => appState.get('navigation').toJS() });

const rootElement = document;

function renderApp(rootComponent) {
  render(
    <AppContainer component={rootComponent} props={ {store, history: browserHistory} } />,
    rootElement
  );
}

renderApp(Root);

if (module.hot) {
  console.log('hot module');
  module.hot.accept(
    './containers/root',
    () => renderApp(require('./containers/root').default)
  );
}