var React = require('react');
var Link = require('react-router').Link;

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
        HOME
        <Link to="sign-up">SIGN UP</Link>
      </div>
    );
  }
});

module.exports = HomeContainer;