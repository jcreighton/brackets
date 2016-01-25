var React = require('react');
var { connect } = require('react-redux');

var InputCustom = require('../input-custom/input-custom.js');
var Feedback = require('../feedback/feedback.js');

var Password = React.createClass({
  // getInitialState: function() {
  //   return {
  //     isVisible: true,
  //     isValid: false,
  //     isError: false
  //   }
  // },
  getDefaultProps: function() {
    return {
      label: 'Password',
      type: 'password',
      ref: 'password'
    }
  },
  // propTypes: {
  //   label: React.PropTypes.string,
  //   message: React.PropTypes.string,
  //   placeholder: React.PropTypes.string,
  //   errorMessage: React.PropTypes.string,
  //   defaultValue: React.PropTypes.string
  // },
  isValid: function() {
    // check that password is only letters, numbers, !@? &; 6-18 characters
    // var regex = /^[a-zA-Z0-9$!?@]{6,18}$/;
    // var password = this.refs.password.getDOMNode().value;

    // var isValidPassword = regex.test(password);
    // var state;

    // if (!isValidPassword) {
    //   state = {
    //     isValid: false,
    //     isError: true
    //   };
    // } else {
    //   state = {
    //     isValid: true,
    //     isError: false
    //   };
    // }

    // this.setState(state);

    // this.props.onValidation('password', {
    //   isValid: isValidPassword,
    //   value: password
    // });
    // var _this = this;
    // console.log(store, this.context, _this.context);
    // store.dispatch({
    //   type: 'AN_INPUT_ACTION',
    //   value: {
    //     email: true,
    //     value: 'jcreighton08@gmail.com'
    //   }
    // });
  },
  render: function() {
    console.log(this.props, this.context);
    return (
      <div>
        <Feedback {...this.props} />
        <InputCustom {...this.props} />
      </div>
    );
  }
});

var mapDispatchToProps = function(dispatch) {
  return {
    onBlur: function() {
      dispatch({
        type: 'AN_INPUT_ACTION',
        value: {
          email: true,
          value: 'jcreighton08@gmail.com'
        }
      });
    }
  }
};
// module.exports = Password;
module.exports = connect(null, mapDispatchToProps)(Password);