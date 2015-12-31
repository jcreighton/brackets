var React = require('react');
var Reflux = require('reflux');
var UserStore = require('../../stores/UserStore.js');
var Actions = require('../../actions/actions.js');
var Input = require('./basics/basic-input.js');
var Feedback = require('./basics/feedback.js');

var Username = React.createClass({
  mixins: [Reflux.connect(UserStore)],
  getInitialState: function() {
    return {
      isVisible: true,
      isValid: true,
      isUniqueEmail: true,
      message: 'Create a username'
    }
  },
  getDefaultProps: function() {
    return {
      label: 'Username',
      message: 'Create a username',
    }
  },
  propTypes: {
    label: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    message: React.PropTypes.string,
    defaultValue: React.PropTypes.string
  },
  isValid: function() {
    var username = this.refs.username.getDOMNode().value;
    // Check that username contains ONLY letters/numbers & >= 3 characters
    var regex = /^[a-zA-Z0-9_]{3,18}$/;
    var isValidUsername = regex.test(username);

    if (!isValidUsername) {
      this.setState({
        message: '# & letters only',
        isValid: false,
        isError: true
      });
    } else {
      this.isUnique(username);
    }
  },
  isUnique: function(username) {
    Actions.checkUsername(username);
  },
  onValidation: function(username) {
    this.props.onValidation('username', {
      isValid: this.state.isValid,
      value: username
    });

  },
  render: function() {
    return (
      <div className="ob-input username">
        <Feedback isVisible={this.state.isVisible} isError={this.state.isError} message={this.state.message} />
        <div className="input">
          <label>{this.props.label}</label>
          <Input type="text" ref="username" onInputBlur={this.isValid} placeholder={this.props.placeholder} defaultValue={this.props.defaultValue} />
        </div>
      </div>
    );
  }
});

module.exports = Username;

