module.exports = function(state = {}, action) {
  console.log('reducer was called with state', state, 'and action', action)
  return state;
};