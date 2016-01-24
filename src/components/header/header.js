var React = require('react');
var Link = require('react-router').Link;

var styles = require('./header.css');

var Header = React.createClass({
  render: function() {
    return (
      <header className={styles.header}>
        <h1 className={styles.h1}>
          <Link to="sign-up" className={styles.link}>
            <span className={styles.bracket}>[</span>
            <span className={styles.name}>Open Bracket</span>
          </Link>
        </h1>
      </header>
    );
  }
});

module.exports = Header;
