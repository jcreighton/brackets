var React = require('react');

var styles = require('./logo-bracket.css');

var LogoBracket = React.createClass({
  render: function() {
    return (
      <div>
        <span className={styles.bracket}>[</span>
        <span className={styles.name}>Open Brackets</span>
      </div>
    )
  }
});

module.exports = LogoBracket;