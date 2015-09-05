var Reflux = require('reflux');

var Actions = Reflux.createActions([
  'createUser',
  'checkUsername',
  'userLogin',
  'router',
  'navigate',
  'profileCreation',
  'setCurrentLocation',
  'setLocation'
]);

module.exports = Actions;