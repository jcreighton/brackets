var React = require('react');
var Link = require('react-router').Link;

var { connect } = require('react-redux');

var Header = require('../components/header/header.js');

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
        <Link to="sign-up">SIGN UP</Link>
      </div>
    );
  }
});

module.exports = HomeContainer;