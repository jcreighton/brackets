var React = require('react');
var { connect } = require('react-redux');

var styles = require('./form-sign-up.css');

// COMPONENTS
var InputEmail = require('../input-email/input-email.js');
var InputUsername = require('../input-username/input-username.js');
var InputName = require('../input-name/input-name.js');
// var InputCheckboxList = require('../input-checkbox-list/input-checkbox-list.js');
var createCheckboxWithValidation = require('../input-with-validation/input-checkbox-with-validation.js');
var InputCheckbox = createCheckboxWithValidation({}, {isChecked: true});
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

    // Check if any inputs are invalid
    var invalid = inputs.filter((input, i) => !(input[keys[i]]));

    if (invalid.length === 0) {
      var fields = Object.assign(...inputs);
      this.props.requestUserLogin(fields);
    } else {
      this.props.loginUserFailure('Form invalid');
    };
  },
  onInputValidation: function(name, inputState) {
    // this.state.inputs[name] = inputState;
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
        <div>
          <h3>Code of Awesome</h3>
          <div>
            <p>
              Bacon ipsum dolor amet leberkas capicola doner ground round, sausage boudin prosciutto beef pork chop flank tenderloin shoulder bresaola bacon kielbasa. Pig bacon bresaola, shank beef ribs ground round venison. Drumstick brisket sausage, doner tail corned beef salami meatloaf pork chop pork. Prosciutto sausage porchetta tongue t-bone, meatball
              Bacon ipsum dolor amet leberkas capicola doner ground round, sausage boudin prosciutto beef pork chop flank tenderloin shoulder bresaola bacon kielbasa. Pig bacon bresaola, shank beef ribs ground round venison. Drumstick brisket sausage, doner tail corned beef salami meatloaf pork chop pork. Prosciutto sausage porchetta tongue t-bone, meatball chicken venison. Boudin pork chop filet mignon porchetta cupim ground round. Tenderloin hamburger ham hock ball tip meatloaf, pancetta ground round andouille pork. Short ribs ham hock shank tongue jowl drumstick cow pork belly.
            </p>
            <p>
              Bacon ipsum dolor amet leberkas capicola doner ground round, sausage boudin prosciutto beef pork chop f
              Bacon ipsum dolor amet leberkas capicola doner ground round, sausage boudin prosciutto beef pork chop flank tenderloin shoulder bresaola bacon kielbasa. Pig bacon bresaola, shank beef ribs ground round venison. Drumstick brisket sausage, doner tail corned beef salami meatloaf pork chop pork. Prosciutto sausage porchetta tongue t-bone, meatball chicken
            </p>
            <p>

              Bacon ipsum dolor amet leberkas capicola doner ground round, sausage boudin prosciutto beef pork chop flank tenderloin shoulder bresaola bacon kielbasa. Pig bacon bresaola, shank beef ribs ground round venison. Drumstick brisket sausage, doner tail corned beef salami meatloaf pork chop pork. Prosciutto sausage porchetta tongue t-bone, meatball chicken venison. Boudin pork chop filet mignon porchetta cupim ground round. Tenderloin hamburger ham hock ball tip meatloaf, pancetta ground round andouille pork. Short ribs ham hock shank tongue jowl drumstick cow pork belly.
            </p>
          </div>
          <InputCheckbox ref="conduct" value="conduct" label="I agree to the Code of Awesome" />
          <Button onClick={this.validateForm}>Start making connections</Button>
          </div>
          </div>
      </form>
    );
  }
});

module.exports = FormSignUp;