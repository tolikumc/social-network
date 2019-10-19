import { authAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'auth/SET_USER_DATA';

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      };
    default:
      return state;
  }
};

export default authReducer;

const setUserDataActionCreator = (userId, login, email, isAuth) => {
  return { type: SET_USER_DATA, data: { userId, login, email, isAuth } };
};

export const signIn = () => {
  return dispatch => {
    authAPI.auth().then(data => {
      if (data.resultCode === 0) {
        const { id, login, email } = data.data;
        dispatch(setUserDataActionCreator(id, login, email, true));
      }
    });
  };
};
export const signUp = (email, password, rememberMe) => {
  return dispatch => {
    authAPI.login(email, password, rememberMe).then(data => {
      if (data.resultCode === 0) {
        dispatch(signIn());
      } else {
        const message =
          data.data.messages.length > 0 ? data.data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', { _error: message }));
      }
    });
  };
};
export const logout = () => {
  return dispatch => {
    authAPI.logOut().then(data => {
      if (data.resultCode === 0) {
        dispatch(setUserDataActionCreator(null, null, null, false));
      } else {
        const message =
          data.messages.length > 0 ? data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', { _error: message }));
      }
    });
  };
};
