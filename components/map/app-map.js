/** @jsx React.DOM */

var React = require('react');
var Instagram = require('instagram-node-lib');

// Configure Instagram
Instagram.set('client_id', '6313400f443044bb96b6ad4354742b1f');
Instagram.set('client_secret', 'a084c8d9986a4e05a70204ff2e160c73');

var Map = React.createClass({
  getInitialState: function() {
    return {
      markers: []
    }
  },
  componentDidMount: function() {
    // call Instagram API (data for entire previous week)
    console.log('Instagram', Instagram);
    // Instagram.users.recent({
    //   user_id: 592328384,
    //   complete: function(data, pagination) {
    //     console.log('data', data);
    //     console.log('pagination', pagination);
    //   },
    //   error: function(errorMessage, errorObject, caller) {
    //     console.log(errorMessage);
    //   }
    // });

    var requestURL = 'https://api.instagram.com/v1/users/592328384/media/recent/?client_id=6313400f443044bb96b6ad4354742b1f';

    var request = new XMLHttpRequest();
    request.open('GET', requestURL, true);

    request.onload = function(e) {
      console.log(e);
    };

    request.send();

    // on result, loop through to add items to array
    // BLAH

    //then update state
    // this.setState({
    //   markers: markers
    // });
  },
  render: function() {
    return (
      <main className="page-map">
        <section className="map">
          <div className="inner">
            <div>MAP</div>
          </div>
        </section>
      </main>
    );
  }
});

module.exports = Map;