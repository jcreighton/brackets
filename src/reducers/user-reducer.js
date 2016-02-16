module.exports = function(state = { username: null, password: null, logged_in: false }, action) {
  switch (action.type) {
    case 'LOGIN_USER_REQUEST':
      return {
        ...state,
        isRequesting: true
      };
      break;

    case 'LOGIN_USER_SUCCESS':
      return {
        ...state,
        isRequesting: false,
        isError: false,
        logged_in: true
      };
      break;

    case 'LOGIN_USER_FAILURE':
      return {
        ...state,
        isRequesting: false,
        isError: true,
        error: action.payload,
        logged_in: false
      };
      break;

    default:
      return state;
  }
};