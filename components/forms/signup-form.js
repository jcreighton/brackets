/** @jsx React.DOM */

var React = require('react');
var Reflux = require('reflux');
var UserStore = require('../../stores/UserStore.js');
var Actions = require('../../actions/actions.js');

// UTILITIES
var _ = require('lodash');

// COMPONENTS
var Email = require('../inputs/email.js');
var Username = require('../inputs/username.js');
var Name = require('../inputs/name.js');
var CheckboxList = require('../inputs/checkbox-list.js');
var Checkbox = require('../inputs/checkbox.js');
var Password = require('../inputs/password.js');
var Location = require('../inputs/location.js');
var Submit = require('../buttons/event-button.js');
var Feedback = require('../inputs/basics/feedback.js');

var SignUpForm = React.createClass({
  mixins: [Reflux.connect(UserStore)],
  getInitialState: function() {
    return {
      inputs: {},
      isValidForm: false,
      conductError: {
        message: 'AGREE WITH IT, DAMN IT!',
        isVisible: false
      },
      checkboxes: {
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
      },
      opportunities: {
        message: 'What opportunities are you looking for?'
      }
    };
  },
  isValid: function(e) {
    e.preventDefault();

    // Check if form is valid
    var isValidForm = this.onFormValidation();
    var state;
    console.log('isValidForm: ', isValidForm);

    if (isValidForm) {
      state = {
        isValidForm: false
      };
      // Create clean data object
      var inputs = this.state.inputs;
      var data = {};
      _.forEach(inputs, function(input, key) {
        data[key] = input.value;
      });
      console.log('everything is cool! now create profile', data);
      // Create user
      // Actions.createUser(data);
    } else {
      state = {
        isValidForm: false
      };
      console.log('such errors! much disappointment!');
    }

    this.setState(state);
  },
  onFormValidation: function() {
    console.log('BEFORE onFormValidation this.state.inputs', this.state.inputs);
    // Call isValid callback for each referenced input
    var keys = Object.keys(this.refs);
    keys.map(function(key) {
      return this.refs[key].isValid();
    }, this);
    console.log('AFTER onFormValidation this.state.inputs', this.state.inputs);
    // Check if any inputs are invalid
    var inputs = this.state.inputs;
    var invalidInputs = _.filter(inputs, function(input) {
      return input.isValid === false;
    });
    console.log('are there invalid inputs?', invalidInputs);
    return (invalidInputs.length === 0);
  },
  onInputValidation: function(name, inputState) {
    this.state.inputs[name] = inputState;
    console.log('input state: ', this.state.inputs);

    // Handle updating progress bar component
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
            <h2>{this.state.opportunities.message}</h2>
            <CheckboxList ref="checklist"
              className="opportunities-list"
              onValidation={this.onInputValidation}
              limit={this.state.checkboxes.limit}
              checkboxes={this.state.checkboxes.settings} />
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