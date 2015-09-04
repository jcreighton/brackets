var Reflux = require('reflux');

var Actions = Reflux.createActions([
  'createUser',
  'checkUsername',
  'userLogin',
  'router',
  'navigate'
]);

module.exports = Actions;