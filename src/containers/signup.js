var React = require('react');
var { connect } = require('react-redux');

var SignUpContainer = React.createClass({
  handleOnClick: function() {
    this.props.onClick();
  },
  render: function() {
    return (
      <div onClick={this.handleOnClick}>
        SIGN UP FORM
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