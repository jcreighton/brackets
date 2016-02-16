var React = require('react');

var InputCustom = require('../input-custom/input-custom.js');
var Feedback = require('../feedback/feedback.js');

var Password = React.createClass({
  getInitialState: function() {
    return {
      isValid: false,
      isError: false
    }
  },
  getDefaultProps: function() {
    return {
      label: 'Password',
      type: 'password'
    }
  },
  propTypes: {
    label: React.PropTypes.string,
    message: React.PropTypes.string,
  },
  isValid: function(value) {
    console.log('PASSWORLD VALUE', value);
    // check that password is only letters, numbers, !@? &; 6-18 characters
    var regex = /^[a-zA-Z0-9$!?@]{6,18}$/;
    // var isValid = regex.test(value);
    var isValid = true;

    if (isValid) {
      this.setState({
        isValid: true,
        isError: false
      });
    } else {
      this.setState({
        isValid: false,
        isError: true
      });
    }

    return {
      name: 'password',
      isValid,
      value
    };
  },
  render: function() {
    return (
      <div>
        <Feedback {...this.props} />
        <InputCustom {...this.props} onChange={this.isValid} onBlur={this.isValid} />
      </div>
    );
  }
});

module.exports = Password;