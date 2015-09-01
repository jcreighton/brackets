/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router-component');
var _ = require('lodash');
var Firebase = require('firebase');
var ref = new Firebase('https://openbracket.firebaseio.com');
var Email = require('../inputs/app-email.js');
var Username = require('../inputs/app-username.js');
var Name = require('../inputs/app-name.js');
var CheckboxList = require('../inputs/app-checkbox-list.js');
var Checkbox = require('../inputs/app-checkbox.js');
var Password = require('../inputs/app-password.js');
var Submit = require('../buttons/app-event-button.js');
var Error = require('../inputs/basics/app-error.js');

var SignUpForm = React.createClass({
  mixins: [Router.NavigatableMixin],
  getInitialState: function() {
    return {
      message: 'Create an account:',
      emailError: {
        message: 'Email already in use!',
        isVisible: false
      },
      checkboxes: [
        {
          value: 'social',
          text: 'I\'d like to find new friends'
        },
        {
          value: 'mentor',
          text: 'I\'d like to be a mentor'
        },
        {
          value: 'mentee',
          text: 'I\'d like to find a mentor'
        },
        {
          value: 'networking',
          text: 'I\'m interested in networking'
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

      console.log('this.data', this.data);

      // Create user
      this.createUser();
    }
  },
  createUser: function() {
    var _this = this;

    ref.createUser({
      email: this.data.email,
      password: this.data.password
    }, function(error, authData) {
      if (error) {
        console.log("User creation failed!", error);
        // if EMAIL ERROR set error message
        var errorCode = error.code;
        if (errorCode === 'EMAIL_TAKEN') {
          _this.setState({
            emailError: {
              message: 'Email already in use!',
              isVisible: true
            }
          });
        }
      } else {
        console.log("Created successfully:", authData);
        // Create profile for user
        ref.child('users')
            .child(authData.uid)
            .set({
              "first_name": _this.data.firstName,
              "last_name": _this.data.lastName,
              "username": _this.data.username,
              "email": _this.data.email,
              "conductAgreementSigned": true,
              "interactions": _this.data.interactionsList
            });
        // location: {lat: 123, long: 678},


        // Log user in
        // _this.loginUser();
      }
    });



    // Firebase image hosting...
  },
  loginUser: function() {
    var _this = this;

    ref.authWithPassword({
      email: this.data.email,
      password: this.data.password
    }, function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully:", authData);
        var path = '/' + _this.data.username + '/profile';
        _this.navigate(path);
      }
    });

    // Direct to Map? Highlight profile & handraise areas
  },
  render: function() {
    return (
      <form className="ob-signup-form">
        <h2>{this.state.message}</h2>
        <Email ref="email"/>
        <Error isVisible={this.state.emailError.isVisible} errorMessage={this.state.emailError.message} />
        <Username ref="username" />
        <Password ref="password" />
        <Name ref="firstName" refName="firstName" label="First Name" placeholder="First name" />
        <Name ref="lastName" refName="lastName" label="Last Name" placeholder="Last name" />
        <CheckboxList ref="interactionsList" refName="interactionsList" checklistClassName="interactions-list" checkboxes={this.state.checkboxes} />
        <Checkbox ref="conductAgreement" value="conductAgreement" text="I agree to the Code of Conduct"/>
        <Submit className="small" onClick={this.isValid}>SIGN UP</Submit>
      </form>
    );
  }
});

module.exports = SignUpForm;