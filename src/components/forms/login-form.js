var React = require('react');

// COMPONENTS
var Label = require('../inputs/basics/label.js');
var Input = require('../inputs/basics/basic-input.js');
var Feedback = require('../inputs/basics/feedback.js');
var Submit = require('../buttons/event-button.js');


var LoginForm = React.createClass({
  mixins: [Reflux.connect(UserStore)],
  getInitialState: function() {
    return {
      message: 'Email or password is incorrect.'
    };
  },
  handleLogin: function() {
    console.log('authenticating...');
  },
  render: function() {
    return (
      <div className="ob-login-form">
        <h2>LOGIN</h2>
        <Label>Email</Label>
        <Input type="text" ref="email" />
        <Label>Password</Label>
        <Input type="password" ref="password" />
        <Feedback message={this.state.message} />
        <Submit className="small" onClick={this.handleLogin}>LOGIN</Submit>
      </div>
    );
  }
});

module.exports = LoginForm;