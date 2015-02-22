/** @jsx React.DOM */

var React = require('react');
var Link = require('react-router-component').Link;

var Header = React.createClass({
  render: function() {
    // var items = items.map(function(item){
    //   return <li><Link href={item.url}>{item.name}</Link></li>
    // });

    return (
      <header>
        <h1><Link href="/">[Open Bracket</Link></h1>
        <nav>
          <ul>
            <li><Link href='/sign-up'>Sign Up</Link></li>
            <li><Link href='/login'>Login</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
});

module.exports = Header;
