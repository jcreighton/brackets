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
        logged_in: true,
        authData: action.payload
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

    case 'SET_USER_PROFILE':
      return {
        ...state,
        ...action.payload
      }

    default:
      return state;
  }
};