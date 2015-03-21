/** @jsx React.DOM */

var React = require('react');
var Link = require('react-router-component').Link;

var Header = React.createClass({
  render: function() {
    return (
      <header>
        <h1><Link href="/"><span className="bracket">[</span><span className="name">Open Bracket</span></Link></h1>
        <div className="ob-button medium donate" href="http://gofundme.com">Donate</div>
      </header>
    );
  }
});

module.exports = Header;
