/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router-component');
var HomePage = require('./home/app-home.js');
var TestPage = require('./test/app-test.js');


var Locations = React.createFactory(Router.Locations);
var Location = React.createFactory(Router.Location);


var App =
  React.createClass({
    componentWillMount: function() {
      console.log('mounting');
    },
    render:function(){
      return (
          <Locations path={this.props.path}>
            <Location path="/" handler={HomePage} />
            <Location path="/sign-up" handler={TestPage} />
          </Locations>
        )
    }
  });

module.exports = App;

// var React = require('react');
// var HomePage = React.createFactory(require('./home/app-home.js'));


// var App = React.createClass({
//   render: function(){
//     return (
//       <div id="container">
//         <HomePage initialMsg={this.props.initialMsg}/>
//       </div>
//     )
//   }
// });

// module.exports = App;

