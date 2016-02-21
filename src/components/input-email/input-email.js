var React = require('react');
var { connect } = require('react-redux');

var InputCustom = require('../input-custom/input-custom.js');
var Feedback = require('../feedback/feedback.js');

var InputEmail = React.createClass({
  getInitialState: function() {
    return {
      isValid: true,
      isError: false
    }
  },
  getDefaultProps: function() {
    return {
      label: 'Email',
      type: 'email',
      message: 'What\'s your email address?' ,
      error: 'Must be a valid email address',
    }
  },
  propTypes: {
    label: React.PropTypes.string,
    type: React.PropTypes.string,
    message: React.PropTypes.string,
    error: React.PropTypes.string
  },
  isValid: function(value) {
    // Check that email address is valid
    var regex = /^([\w\-\.]+)@((\[([0-9]{1,3}\.){3}[0-9]{1,3}\])|(([\w\-]+\.)+)([a-zA-Z]{2,4}))$/;
    var value = this.input.value;
    var isValid = regex.test(value);

    if (!isValid) {
      this.setState({
        isValid: false,
        isError: true,
      });
    } else {
      this.setState({
        isValid: true,
        isError: false,
      });
    }

    return {
      name: 'email',
      isValid,
      value
    };
  },
  render: function() {
    const { message, error } = this.props;
    const { isError, isValid } = this.state;

    return (
      <div>
        <Feedback {...this.props} {...this.state} isVisible={isError} message={isValid ? message : error} />
        <InputCustom
          returnValue={(node) => {
            if (node != null) {
              this.input = node }
            }
          }
          {...this.props}
          onBlur={this.isValid}
        />
      </div>
    );
  }
});

module.exports = InputEmail;