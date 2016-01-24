module.exports = function(state = [], action) {
  console.log('reducer_2 was called with state', state, 'and action', action)
  return state;
};