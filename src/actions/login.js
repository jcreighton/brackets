var Firebase = require('firebase');
var ref = new Firebase('https://test-openbracket.firebaseio.com');
var { browserHistory } = require('react-router');

export function loginUserRequest() {
  return {
    type: 'LOGIN_USER_REQUEST',
    payload: {}
  }
};

export function loginUserSuccess(authData) {
  return {
    type: 'LOGIN_USER_SUCCESS',
    payload: authData
  }
};

export function loginUserFailure(errorData) {
  return {
    type: 'LOGIN_USER_FAILURE',
    payload: errorData
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

export function logoutUserFailure(errorData) {
  return {
    type: 'LOGOUT_USER_FAILURE',
    payload: errorData
  }
}

export function setUserProfile(profile) {
  return {
    type: 'SET_USER_PROFILE',
    payload: profile
  }
}

export function requestUserLogin(user) {
  return (dispatch) => {
    dispatch(loginUserRequest());

    return ref.authWithPassword({
      email: user.email,
      password: user.password
    })
      .then((authData) => {
        dispatch(loginUserSuccess(authData));
        browserHistory.push('/map');
        return authData.uid;
      })
      .then((uid) => dispatch(getUserProfile(uid)))
      .catch((error) => {
        dispatch(loginUserFailure(error.code));
      });
  }
}

export function getUserProfile(uid) {
  return (dispatch) => {
    return ref.child('users').child(uid)
      .once('value')
      .then((data) => {
        var profile = data.val();
        dispatch(setUserProfile(profile));
      })
      .catch((error) => {
        dispatch(loginUserFailure(error.code));
      });
  };
}

