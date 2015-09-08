var Reflux = require('reflux');

var Actions = Reflux.createActions([
  'createUser',
  'checkUsername',
  'userLogin',
  'router',
  'navigate',
  'profileCreation'
]);

module.exports = Actions;