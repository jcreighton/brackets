var express = require('express');
var exphbs = require('express-handlebars');
var config = require('./config.js');
var router = require('./router.js');

// Create an express instance and set a port variable
var app = express();
var port = process.env.PORT || 8080;

// Set handlebars as the templating engine
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Index Route
app.get('/', router.index);

// Sign Up Route
app.get('/sign-up', router.sign_up);

// Profile Route
app.get('/profile/:username', router.profile);

// Map Route
app.get('/finder', router.finder);

// Set /public as our static content dir
app.use("/", express.static(__dirname + "/public/"));

// Start server
app.listen(port, function() {
  console.log('Listening on port ' + port);
});