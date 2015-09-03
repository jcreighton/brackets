/** @jsx React.DOM */

var React = require('react');
var Reflux = require('reflux');
var UserStore = require('../../stores/UserStore.js');
var Actions = require('../../actions/actions.js');
var Input = require('./basics/basic-input.js');
var Error = require('./basics/error.js');

var Username = React.createClass({
  mixins: [Reflux.connect(UserStore)],
  getInitialState: function() {
    return {
      isUnique: true,
      isValid: true,
      invalidUsernameMessage: 'Must be 3-18 characters. Letters, numbers, - and _ allowed.',
      takenUsernameMessage: 'Username is taken!'
    }
  },
  getDefaultProps: function() {
    return {
      label: 'Username',
      placeholder: 'Choose a nifty username!'
    }
  },
  propTypes: {
    label: React.PropTypes.string,
    placeholder: React.PropTypes.string
  },
  isUnique: function() {
    console.log('isUnique');
    var username = this.refs.username.getDOMNode().value;
    Actions.checkUsername(username);
console.log('isUnique state: ',username, this.state.isUnique);
    if (this.state.isUnique) {
      this.isValid();
    }
  },
  isValid: function() {
    console.log('isValid');
    var username = this.refs.username.getDOMNode().value;
    // Check that username contains ONLY letters/numbers & >= 4 characters
    var regex = /^[a-zA-Z0-9_-]{3,18}$/;
    var isValidUsername = regex.test(username);
    console.log('isValid', isValidUsername);
    if (!isValidUsername) {
      this.setState({
        isValid: false
      });
    } else {
      this.setState({
        isValid: true
      });
    }

    return {
      username: isValidUsername,
      value: username
    };
  },
  render: function() {
    return (
      <div className="ob-input username">
        <label>{this.props.label}</label>
        <span>{this.state.isUnique}</span>
        <Input type="text" ref="username" onInputBlur={this.isUnique} placeholder={this.props.placeholder} />
        <Error isVisible={!this.state.isValid} errorMessage={this.state.invalidUsernameMessage} />
        <Error isVisible={!this.state.isUnique} errorMessage={this.state.takenUsernameMessage} />
      </div>
    );
  }
});

module.exports = Username;

