var React = require('react');

var InputCustom = require('../input-custom/input-custom.js');
var Feedback = require('../feedback/feedback.js');

var InputEmail = React.createClass({
  // getInitialState: function() {
  //   return {
  //     isVisible: true,
  //     isValid: true,
  //     isError: false
  //   }
  // },
  getDefaultProps: function() {
    return {
      label: 'Email',
      type: 'email'
    }
  },
  // propTypes: {
  //   callback: React.PropTypes.func,
  //   isUnique: React.PropTypes.bool,
  //   label: React.PropTypes.string,
  //   placeholder: React.PropTypes.string,
  //   defaultValue: React.PropTypes.string
  // },
  // isValid: function() {
    // Check that email address is valid
    // var regex = /^([\w\-\.]+)@((\[([0-9]{1,3}\.){3}[0-9]{1,3}\])|(([\w\-]+\.)+)([a-zA-Z]{2,4}))$/;
    // var value = this.refs.email.getDOMNode().value;

    // var isValidEmail = regex.test(value);
    // var state;

    // if (!isValidEmail) {
    //   state = {
    //     isValid: false,
    //     isError: true,
    //   };
    // } else {
    //   state = {
    //     isValid: true,
    //     isError: false
    //   };
    // }

    // this.setState(state);

    // this.props.onValidation('email', {
    //   isValid: isValidEmail,
    //   value: value
    // });
  // },
  render: function() {
    // var errorMessage = this.props.isUnique ? 'Are you sure that\'s a valid e-mail address?' : 'An account with that email address already exists';
    // var message = this.state.isValid ? this.props.message : errorMessage;

    return (
      <div>
        <Feedback {...this.props} />
        <InputCustom {...this.props} />
      </div>
    );
  }
});

module.exports = InputEmail;