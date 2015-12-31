var React = require('react');
var { Router, Route, browserHistory } = require('react-router');
var HomePage = React.createFactory(require('./home.js'));
var SignUpPage = React.createFactory(require('./signup.js'));
var Header = React.createFactory(require('../header/header.js'));

var App = React.createClass({
  render: function() {
    return (
      <div className="main">
        <Header />
        <Router history={browserHistory}>
          <Route path="/" component={HomePage} />
          <Route path="sign-up" component={SignUpPage} />
        </Router>
      </div>
    );
  }
});

module.exports = App;




// var React = require('react');
// var Reflux = require('reflux');
// var Router = require('react-router-component');
// var Navigatable = Router.NavigatableMixin;
// var Header = require('../components/header/header.js');
// var HomePage = React.createElement(require('./home.js'));
// var SignUpPage = React.createElement(require('./signup.js'));
// var UserPage = React.createElement(require('./home.js'));

// var Actions = require('../actions/actions.js');
// var RouterStore = require('../stores/RouterStore.js');

// var Locations = Router.Locations;
// var Location = Router.Location;

// var App = React.createClass({
//   mixins: [Reflux.connect(RouterStore)],
//   componentDidMount: function () {
//     Actions.router(this.refs.router);
//   },
//   render: function(){
//     return (
//       <div>
//         <Header />
//         <div className="main">
//           <Locations ref="router" path={this.props.path}>
//             <Location path="/" handler={HomePage} />
//             <Location path="/sign-up" handler={SignUpPage} />
//             <Location path="/:username" handler={UserPage} />
//           </Locations>
//         </div>
//       </div>
//     )
//   }
// });

// module.exports = React.createFactory(App);
