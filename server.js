var express = require('express');
var exphbs = require('express-handlebars');
var router = require('./router.js');

// Create an express instance and set a port variable
var app = express();
var port = process.env.PORT || 8080;

// Set handlebars as the templating engine
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

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

// // Map Route
// app.get('/finder', router.finder);

// Set /public as our static content dir
app.use('/', express.static(__dirname + '/public/'));

// Start server
app.listen(port, function() {
  console.log('Listening on port ' + port);
});