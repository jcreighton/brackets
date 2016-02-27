var React = require('react');
var { connect } = require('react-redux');

var styles = require('./form-sign-up.css');

// COMPONENTS
var InputEmail = require('../input-email/input-email.js');
var InputUsername = require('../input-username/input-username.js');
var InputName = require('../input-name/input-name.js');
// var InputCheckboxList = require('../input-checkbox-list/input-checkbox-list.js');
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
// var InputLocation = require('../input-location/input-location.js');
var Button = require('../button/button.js');

var FormSignUp = React.createClass({
  getInitialState: function() {
    return {
      isValid: false
    }
  },
  getDefaultProps: function() {
    return {
      checklist: {
        limit: 1,
        settings: [
          {
            value: 'social',
            text: 'Social',
            type: 'tag'
          },
          {
            value: 'mentorship',
            text: 'Mentorship',
            type: 'tag'
          },
          {
            value: 'networking',
            text: 'Networking',
            type: 'tag'
          }
        ]
      }
    }
  },
  propTypes: {
    checklist: React.PropTypes.object
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
  onInputValidation: function() {
    // TODO: Handle updating progress bar component
  },
  render: function() {
    return (
      <form className="ob-signup-form" noValidate>
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