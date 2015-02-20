/** @jsx React.DOM */

var React = require('react');
var Link = React.createFactory(require('react-router-component').Link);

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <h2>WORK YOU FILTHY BEAST!</h2>
        <Link href="sign-up">Sign Up</Link>
      </div>
    );
  }
});

module.exports = Home;

// var Home = React.createClass({
//   getInitialState: function() {
//     return {
//       message: this.props.initialMsg,
//       name: 'Jenn'
//     };
//   },
//   changeName: function(){
//     this.setState({name: 'Buffington'});
//   },
//   render: function() {
//     return (
//       <div>
//         <h2>{this.state.message}, Open Bracket</h2>
//         <button onClick={this.changeName}>GO</button>
//         <span>{this.state.name} is the best developer ever</span>
//         <Link href="sign-up">Sign Up</Link>
//       </div>
//     );
//   }
// });

// module.exports = Home;