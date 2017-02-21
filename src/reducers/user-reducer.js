module.exports = function(state = {}, action) {
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
        loggedIn: true,
        authData: action.payload
      };
      break;

    case 'LOGIN_USER_FAILURE':
      return {
        ...state,
        authData: {},
        isRequesting: false,
        isError: true,
        error: action.payload,
        loggedIn: false
      };
      break;

    case 'SET_USER_PROFILE':
      return {
        ...state,
        ...action.payload
      }

    default:
      return state;
  }
};