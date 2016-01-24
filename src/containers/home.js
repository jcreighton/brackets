var React = require('react');
var Link = require('react-router').Link;

var Header = require('../components/header/header.js');
var FormLogin = require('../components/form-login/form-login.js');

var HomeContainer = React.createClass({
  getDefaultProps: function() {
    return{
      message: 'An open community for women coders',
    }
  },
  propTypes: {
    message: React.PropTypes.string
  },
  render: function() {
    return (
      <div>
        <Header />
        <FormLogin />
        <Link to="sign-up">SIGN UP</Link>
      </div>
    );
  }
});

module.exports = HomeContainer;