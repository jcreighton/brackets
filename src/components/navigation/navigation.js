var React = require('react');
var Link = require('react-router').Link;
var Transition = require('react-addons-css-transition-group');

var Login = require('../form-login/form-login.js');

var styles = require('./navigation.css');
var transitions = require('./transitions.css');

var Navigation = React.createClass({
  getInitialState: function() {
    return {
      showLoginForm: false
    }
  },
  onClickLogin: function() {
    this.setState({
      showLoginForm: true
    });
  },
  renderLoginForm: function() {
    return <Login/>;
  },
  render: function() {
    var login = this.state.showLoginForm ? this.renderLoginForm() : null;

    return (
      <nav className={styles.navigation}>
        <ul>
          <li><Link to="sign-up">Sign Up</Link></li>
          <li className={styles.hidden} onClick={this.onClickLogin}>Login</li>
        </ul>
        <Transition
          transitionName={transitions}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
            {login}
        </Transition>
      </nav>
    );
  }
});

module.exports = Navigation;
