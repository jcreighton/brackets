var React = require('react');
var { connect } = require('react-redux');

import { loginUserFailure, requestUserLogin } from '../../actions/login.js';
var InputEmail = require('../input-email/input-email.js');
var InputPassword = require('../input-password/input-password.js');
var Button = require('../button/button.js');

var styles = require('./form-login.css');

var FormLogin = React.createClass({
  getInitialState: function() {
    return {
      isValid: false
    }
  },
  validateForm: function() {
    // Call isValid for each referenced input
    var keys = Object.keys(this.refs);
    var inputs = keys.map((key) => {
      var input = this.refs[key].isValid();
      return {
        [input.name]: input.isValid ? input.value : null
      };
    });

    // Check if any inputs are invalid
    var invalid = inputs.filter((input) => input);

    if (invalid.length === 0) {
      var fields = Object.assign(...inputs);
      this.props.requestUserLogin(fields);
    } else {
      this.props.loginUserFailure('Invalid form');
    };
  },
  onInputValidation: function() {
    // Handle callback on each input validation
    // this.props.onInputValidation();
  },
  render: function() {
    return (
      <form className={styles.login} noValidate>
        <InputEmail ref="email" onValidation={this.onInputValidation} />
        <InputPassword ref="password" />
        <Button onClick={this.validateForm}>Login</Button>
      </form>
    );
  }
});

module.exports = connect(
  null,
  {
    loginUserFailure,
    requestUserLogin
  }
)(FormLogin);