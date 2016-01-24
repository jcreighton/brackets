var React = require('react');

var InputEmail = require('../input-email/input-email.js');
var InputPassword = require('../input-password/input-password.js');

var styles = require('./form-login.css');

var FormLogin = React.createClass({
  render: function() {
    return (
      <form className={styles.login}>
        <InputEmail />
        <InputPassword />
      </form>
    );
  }
});

module.exports = FormLogin;