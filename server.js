var express = require('express');
var exphbs = require('express-handlebars');
var router = require('./router.js');
var Instagram = require('instagram-node-lib');

var clientID = '6313400f443044bb96b6ad4354742b1f';
var clientSecret = 'a084c8d9986a4e05a70204ff2e160c73';

// Configure Instagram
Instagram.set('client_id', clientID);
Instagram.set('client_secret', clientSecret);
Instagram.set('callback_url', 'http://localhost:8080/instagram-results');

// Create an express instance and set a port variable
var app = express();
var port = process.env.PORT || 8080;

// Start server
var server = app.listen(port, function() {
  console.log('Listening on port ' + port);
});

// Set socket
var io = require('socket.io')(server);

// Set handlebars as the templating engine
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Set /public as the static content dir
app.use('/', express.static(__dirname + '/public/'));

// Index Route
app.get('/', router.index);

// // Sign Up Route
// app.get('/sign-up', router.sign_up);

// // Public Profile Route
// app.get('/:username', router.profile_public);

// // Private Profile Route
// app.get('/:username/profile', router.profile_private);

// // Messages Route
// app.get('/:username/messages', router.messages);

// // Friends List Route
// app.get('/:username/friends', router.friends);

// Map Route
app.get('/map', router.map);

// Instagram Callback Route
app.get('/instagram-results', function(req, res){
    var handshake =  Instagram.subscriptions.handshake(req, res);
});

// Instagram Post Route
app.post('/instagram-results', function(req, res) {
    var data = req.body;

    // Grab the hashtag "tag.object_id"
    // concatenate to the url and send as a argument to the client side
    // data.forEach(function(tag) {
    //   var url = 'https://api.instagram.com/v1/tags/' + tag.object_id + '/media/recent?client_id=' + client_id;
    //   sendMessage(url);

    // });
    res.end();
});

io.on('connection', function(socket) {
  console.log('connected');
});


