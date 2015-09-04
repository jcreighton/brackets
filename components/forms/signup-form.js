/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router-component');
var Navigatable = Router.NavigatableMixin;
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
var Submit = require('../buttons/event-button.js');
var Error = require('../inputs/basics/error.js');

var SignUpForm = React.createClass({
  mixins: [Router.NavigatableMixin, Reflux.connect(UserStore)],
  getInitialState: function() {
    return {
      router: Navigatable,
      emailError: {
        message: 'Email already in use!',
        isVisible: false
      },
      conductError: {
        message: 'AGREE WITH IT, DAMN IT!',
        isVisible: false
      },
      checkboxes: [
        {
          value: 'social',
          text: 'Social'
        },
        {
          value: 'mentorship',
          text: 'Mentorship'
        },
        {
          value: 'networking',
          text: 'Networking'
        }
      ]
    };
  },
  isValid: function(e) {
    e.preventDefault();

    // Get validity information from invididual inputs
    var keys = Object.keys(this.refs);
    var inputs = keys.map(function(key) {
      return this.refs[key].isValid();
    }, this);

    // Determine if any are invalid
    var invalidInputs = inputs.filter(function(input, i) {
      return input[keys[i]] === false;
    });

    // All inputs are valid
    if (invalidInputs.length === 0) {
      // Create a clean object
      this.data = {};
      inputs.forEach(function(input, i) {
        this.data[keys[i]] = input.value;
      }, this);

      // Create user
      Actions.createUser(this.data);
    }
  },
  render: function() {
    return (
      <form className="ob-signup-form">
        <h2>{this.props.message}</h2>
        <Name ref="name" label="Name" />
        <Email ref="email"/>
        <Error isVisible={this.state.emailError.isVisible} errorMessage={this.state.emailError.message} />
        <Username ref="username" />
        <Password ref="password" />
        <CheckboxList ref="interactionsList" refName="interactionsList" checklistClassName="interactions-list" checkboxes={this.state.checkboxes} />
        <div className="code-of-conduct">
          <h3>Code of Awesome</h3>
          <p>
            Bacon ipsum dolor amet leberkas capicola doner ground round, sausage boudin prosciutto beef pork chop flank tenderloin shoulder bresaola bacon kielbasa. Pig bacon bresaola, shank beef ribs ground round venison. Drumstick brisket sausage, doner tail corned beef salami meatloaf pork chop pork. Prosciutto sausage porchetta tongue t-bone, meatball chicken venison. Boudin pork chop filet mignon porchetta cupim ground round. Tenderloin hamburger ham hock ball tip meatloaf, pancetta ground round andouille pork. Short ribs ham hock shank tongue jowl drumstick cow pork belly.
          </p>
          <Checkbox ref="conductAgreement" checkboxClassName="conduct-agreement" value="conductAgreement" text="I agree to the Code of Awesome"/>
        </div>
        <Submit className="small" onClick={this.isValid}>SIGN UP</Submit>
      </form>
    );
  }
});

module.exports = SignUpForm;