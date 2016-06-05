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
    isVisible: true,
    checkboxes: [
      {
        id: 'social',
        name: 'social',
        label: 'Social'
      },
      {
        id: 'mentorship',
        name: 'mentorship',
        label: 'Mentorship'
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
    isChecked: false,
    value: 'conduct',
    error: 'You must agree to the Code of Conduct',
    label: 'I agree to the Code of Conduct'
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
        <div className={styles.column}>
          <h2>Welcome! Let's get your account set up!</h2>
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
        </div>
        <div className={styles.column}>
          <fieldset>
            <h3>Code of Conduct</h3>
            <div className={styles.conduct}>
              <p>Throwup on your pillow. Eat a plant, kill a hand ignore the squirrels, you'll never catch them anyway. Hate dog find empty spot in cupboard and sleep all day sit by the fire eat prawns daintily with a claw then lick paws clean wash down prawns with a lap of carnation milk then retire to the warmest spot on the couch to claw at the fabric before taking a catnap so spread kitty litter all over house but inspect anything brought into the house. Chirp at birds kitty loves pigs chase imaginary bugs, so knock over christmas tree, or need to chase tail. Scream at teh bath hide head under blanket so no one can see, for meowing non stop for food paw at beetle and eat it before it gets away. Put butt in owner's face paw at your fat belly and spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce but eat a plant, kill a hand, yet chase dog then run away. Get video posted to internet for chasing red dot mark territory. Bathe private parts with tongue then lick owner's face.</p>
            </div>
            <InputCheckbox ref="conduct" />
          </fieldset>
          <Button className={styles.button} onClick={this.validateForm}>Start making connections</Button>
          </div>
      </form>
    );
  }
});

module.exports = FormSignUp;