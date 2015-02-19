/** @jsx React.DOM */

var React = require('react');

var Home = React.createClass({
  getInitialState: function() {
    return {
      message: this.props.initialMsg,
      name: 'Jenn'
    };
  },
  changeName: function(){
    this.setState({name: 'Buffington'});
  },
  render: function() {
    return (
      <div>
        <h2>{this.state.message}, Open Bracket</h2>
        <button onClick={this.changeName}>GO</button>
        <span>{this.state.name} is the best developer ever</span>
      </div>
    );
  }
});

module.exports = Home;