var React = require('react');
var Navigation = require('../nav/nav');
var Link = require('react-router-component').Link;

var Header = React.createClass({
  render: function() {
    return (
      <header>
        <h1><Link href="/"><span className="bracket">[</span><span className="name">Open Bracket</span></Link></h1>
        <Navigation></Navigation>
      </header>
    );
  }
});

module.exports = Header;
