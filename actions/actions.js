var Reflux = require('reflux');

var Actions = Reflux.createActions([
  'createUser',
  'checkUsername',
  'loginUser'
]);

module.exports = Actions;