var Firebase = require('firebase');
var ref = new Firebase('https://test-openbracket.firebaseio.com');

export function setUserCredentials(cred) {
  return {
    type: 'SET_USER_CREDENTIALS',
    payload: cred
  }
}

export function loginUserRequest() {
  return {
    type: 'LOGIN_USER_REQUEST',
    payload: {}
  }
};

export function loginUserSuccess() {
  return {
    type: 'LOGIN_USER_SUCCESS',
    payload: {}
  }
};

export function loginUserFailure(error) {
  return {
    type: 'LOGIN_USER_FAILURE',
    payload: error
  }
};

export function logoutUserRequest() {
  return {
    type: 'LOGOUT_USER_REQUEST',
    payload: {}
  }
}

export function logoutUserSuccess() {
  return {
    type: 'LOGOUT_USER_SUCCESS',
    payload: {}
  }
}

export function logoutUserFailure(error) {
  return {
    type: 'LOGOUT_USER_FAILURE',
    payload: error
  }
}

export function requestUserLogin(user) {
  return function(dispatch) {
    dispatch(loginUserRequest());

    return ref.authWithPassword({
      email: user.email,
      password: user.password
    })
      .then(function(authData) {
        dispatch(loginUserSuccess());
      })
      .catch(function(error) {
        dispatch(loginUserFailure(error));
      });
  }
};


