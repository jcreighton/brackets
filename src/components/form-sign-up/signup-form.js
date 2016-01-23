var React = require('react');

// COMPONENTS
var Email = require('../inputs/email.js');
var Username = require('../inputs/username.js');
var Name = require('../inputs/name.js');
var CheckboxList = require('../inputs/checkbox-list.js');
var Checkbox = require('../inputs/checkbox.js');
var Password = require('../inputs/password.js');
var Location = require('../inputs/location.js');
var Submit = require('../button/button.js');
var Feedback = require('../inputs/basics/feedback.js');

var SignUpForm = React.createClass({
  getInitialState: function() {
    return {
      inputs: {},
      isValidForm: false
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
  isValid: function(e) {
    // e.preventDefault();

    // // Check if form is valid
    // var isValidForm = this.onFormValidation();
    // var state;

    // if (isValidForm) {
    //   state = {
    //     isValidForm: false
    //   };
    //   // Create clean data object
    //   var inputs = this.state.inputs;
    //   var data = {};
    //   inputs.forEach(function(input, key) {
    //     data[key] = input.value;
    //   });

    //   // Create user
    //   Actions.createUser(data);
    // } else {
    //   state = {
    //     isValidForm: false
    //   };

    // }

    // this.setState(state);
  },
  onFormValidation: function() {
    // Call isValid callback for each referenced input
    // var keys = Object.keys(this.refs);
    // keys.map(function(key) {
    //   return this.refs[key].isValid();
    // }, this);

    // // Check if any inputs are invalid
    // var inputs = this.state.inputs;
    // var invalidInputs = inputs.filter(function(input) {
    //   return input.isValid === false;
    // });

    // return (invalidInputs.length === 0);
  },
  onInputValidation: function(name, inputState) {
    // this.state.inputs[name] = inputState;
    // TODO: Handle updating progress bar component
  },
  render: function() {
    return (
      <form className="ob-signup-form" noValidate>
        <h2>Welcome! Create a profile & find lady engineers near you.</h2>
        <div className="profile-information">
          <fieldset>
            <Name ref="name" onValidation={this.onInputValidation} />
            <Email ref="email" onValidation={this.onInputValidation} />
          </fieldset>
          <fieldset>
            <Username ref="username" onValidation={this.onInputValidation} />
            <Password ref="password" onValidation={this.onInputValidation} />
          </fieldset>
          <fieldset>
            <h2>What opportunities are you looking for?</h2>
            <CheckboxList ref="checklist"
              className="opportunities-list"
              onValidation={this.onInputValidation}
              limit={this.props.checklist.limit}
              checkboxes={this.props.checklist.settings} />
          </fieldset>
          <fieldset>
            <h2>Where are you located?</h2>
            <Location ref="location" onValidation={this.onInputValidation} />
          </fieldset>
        </div>
        <div className="code-of-conduct">
          <h3>Code of Awesome</h3>
          <div className="text">
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
          <Checkbox ref="conduct" className="conduct-agreement" value="conduct" text="I agree to the Code of Awesome" onSelection={this.onInputValidation} />
          <Submit onClick={this.isValid}>Start making connections</Submit>
        </div>
      </form>
    );
  }
});

module.exports = SignUpForm;