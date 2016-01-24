var { createStore, combineReducers } = require('redux');

var one = require('../reducers/reducer.js');
var two = require('../reducers/reducer_2.js');

var reducers = combineReducers({
  one,
  two
});

module.exports = createStore(reducers);