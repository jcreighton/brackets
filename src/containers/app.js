var React = require('react');

var { Provider } = require('react-redux');

require('normalize.css/normalize.css');
require('../shared/flexboxgrid.css');
require('../shared/global.css');
require('../shared/fonts.css');

var configureStore = require('../store/configureStore.js');

var AppContainer = React.createClass({
  // childContextTypes: {
  //   store: React.PropTypes.shape({
  //     subscribe: React.PropTypes.func.isRequired,
  //     dispatch: React.PropTypes.func.isRequired,
  //     getState: React.PropTypes.func.isRequired
  //   })
  // },
  // getChildContext: function() {
  //   return { store: configureStore }
  // },
  render: function() {
    return (
      <Provider store={ configureStore }>
        <html>
          <head>
            <title>Open Bracket | an open community for women coders</title>
            <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
            <link rel="icon" href="/img/favicon.ico" type="image/x-icon" />
            <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,300' rel='stylesheet' type='text/css' />
            <link rel="stylesheet" type="text/css" href="/css/styles.css" />
          </head>
          <body>
            <div id="open-bracket-app">
              {this.props.children}
            </div>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
            <script type="text/javascript" src="/js/bundle.js"></script>
          </body>
        </html>
      </Provider>
    );
  }
});

module.exports = AppContainer;