var React = require('react');
var { connect } = require('react-redux');

var styles = require('./form-sign-up.css');

// COMPONENTS
var InputEmail = require('../input-email/input-email.js');
var InputUsername = require('../input-username/input-username.js');
var InputName = require('../input-name/input-name.js');
var createCheckboxListWithValidation = require('../input-with-validation/input-checkbox-list-with-validation.js');
var InputCheckboxList = createCheckboxListWithValidation(
  {},
  {
    checkboxes: [
      {
        id: 'social',
        name: 'social',
        label: 'Social'
      },
      {
        id: 'mentor',
        name: 'mentor',
        label: 'Mentor'
      },
      {
        id: 'networking',
        name: 'networking',
        label: 'Networking'
      }
    ]
  });
var createCheckboxWithValidation = require('../input-with-validation/input-checkbox-with-validation.js');
var InputCheckbox = createCheckboxWithValidation(
  {},
  {
    name: 'conduct',
    isChecked: true,
    value: 'conduct',
    label: 'I agree to the Code of Awesome'
  }
);
var InputPassword = require('../input-password/input-password.js');
var InputLocation = require('../input-location/input-location.js');
var Button = require('../button/button.js');

var FormSignUp = React.createClass({
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
    console.log(inputs);
    // Check if any inputs are invalid
    var invalid = inputs.filter((input, i) => !(input[keys[i]]));

    if (invalid.length === 0) {
      var fields = Object.assign(...inputs);
      // this.props.requestUserLogin(fields);
    } else {
      // this.props.loginUserFailure('Form invalid');
    };
  },
  render: function() {
    return (
      <form className={styles.form} noValidate>
        <h2>Welcome! Let's get your account set up!</h2>
        <div className="profile-information">
          <fieldset>
            <InputName ref="name" />
            <InputEmail ref="email" />
          </fieldset>
          <fieldset>
            <InputUsername ref="username" />
            <InputPassword ref="password" />
          </fieldset>
          <fieldset>
            <h2>Where are you located?</h2>
            <InputLocation ref="location" />
          </fieldset>
          <fieldset>
            <h2>What opportunities are you looking for?</h2>
            <InputCheckboxList
              ref="opportunities"
            />
          </fieldset>
          <fieldset>
            <h3>Code of Awesome</h3>
            <InputCheckbox ref="conduct" />
          </fieldset>
          <Button onClick={this.validateForm}>Start making connections</Button>
          </div>
      </form>
    );
  }
});

module.exports = FormSignUp;