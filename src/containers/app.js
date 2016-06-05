var React = require('react');
var { connect } = require('react-redux');
var { browserHistory } = require('react-router');

require('normalize.css/normalize.css');
require('../shared/global.css');
require('../shared/fonts.css');

var AppContainer = React.createClass({
  componentDidMount: function() {
    // Check if user is logged in
  },
  render: function() {
    return (
      <html>
        <head>
          <title>Open Bracket | an open community for women coders</title>
          <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/img/favicon.ico" type="image/x-icon" />
          <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,300' rel='stylesheet' type='text/css' />
          <link rel="stylesheet" type="text/css" href="/styles.css" />
        </head>
        <body>
          <div id="open-bracket-app">
            {this.props.children}
          </div>
          <script type="text/javascript" src="/bundle.js"></script>
        </body>
      </html>
    );
  }
});

module.exports = connect()(AppContainer);
