import { authAPI } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';

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

const setUserDataActionCreator = (userId, login, email) => {
  return { type: SET_USER_DATA, data: { userId, login, email } };
};

export const signIn = () => {
  return dispatch => {
    authAPI.auth().then(data => {
      if (data.resultCode === 0) {
        const { id, login, email } = data.data;
        dispatch(setUserDataActionCreator(id, login, email));
      }
    });
  };
};
