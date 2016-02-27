var React = require('react');
var { connect } = require('react-redux');

var SignUpForm = require('../components/form-sign-up/form-sign-up');

var SignUpContainer = React.createClass({
  handleOnClick: function() {
    this.props.onClick();
  },
  render: function() {
    return (
      <div onClick={this.handleOnClick}>
        <SignUpForm />
      </div>
    );
  }
});

var mapDispatchToProps = function(dispatch) {
  return {
    onClick: function() {
      dispatch({
        type: 'ANOTHER_ACTION',
        value: {
          email: true,
          value: 'jcreighton08@gmail.com'
        }
      });
    }
  }
};

module.exports = connect(null, mapDispatchToProps)(SignUpContainer);