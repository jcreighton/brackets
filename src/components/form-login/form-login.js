var React = require('react');

var InputEmail = require('../input-email/input-email.js');
var InputPassword = require('../input-password/input-password.js');
var Button = require('../button/button.js');

var styles = require('./form-login.css');

var FormLogin = React.createClass({
  render: function() {
    return (
      <form className={styles.login}>
        <InputEmail />
        <InputPassword />
        <Button>Login</Button>
      </form>
    );
  }
});

module.exports = FormLogin;