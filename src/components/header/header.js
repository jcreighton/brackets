var React = require('react');
var Link = require('react-router').Link;

var FormLogin = require('../form-login/form-login.js');
var LogoBracket = require('../logo-bracket/logo-bracket.js');

var styles = require('./header.css');

var Header = React.createClass({
  render: function() {
    return (
      <header className={styles.header}>
        <h1 className={styles.h1}>
          <Link to="sign-up" className={styles.link}>
            <LogoBracket />
          </Link>
        </h1>
        <FormLogin />
      </header>
    );
  }
});

module.exports = Header;
