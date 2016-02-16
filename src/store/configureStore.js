var { createStore, combineReducers, applyMiddleware } = require('redux');
var thunk = require('redux-thunk');
var logger = require('redux-logger');

var one = require('../reducers/reducer.js');
var user = require('../reducers/user-reducer.js');

var reducers = combineReducers({
  one,
  user
});

var createStoreWithMiddleWare = applyMiddleware(thunk, logger())(createStore);

module.exports = createStoreWithMiddleWare(reducers);