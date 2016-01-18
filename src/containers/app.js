var React = require('react');

var App = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <title>Open Bracket | an open community for women coders</title>
          <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/img/favicon.ico" type="image/x-icon" />
          <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,300' rel='stylesheet' type='text/css' />
          <link rel="stylesheet" type="text/css" href="/css/normalize.css" />
          <link rel="stylesheet" type="text/css" href="/css/styles.css" />
        </head>
        <body>
          <div id="open-bracket-app">
            {this.props.children}
          </div>
          <footer>
            <span>Built by <a href="http://twitter.com/gurlcode" target="_blank">Jenn Creighton</a></span>
          </footer>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
          <script type="text/javascript" src="/js/bundle.js"></script>
        </body>
      </html>
    );
  }
});

module.exports = App;