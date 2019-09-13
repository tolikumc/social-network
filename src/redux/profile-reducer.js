import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_DETAIL = 'SET_USER_DETAIL';
const SET_STATUS = 'SET_STATUS';

const initialState = {
  posts: [
    { postText: 'Hi, how are you?', id: '123412' },
    { postText: 'Its my first post', id: '23423sad' }
  ],
  newPostText: '',
  profile: [],
  status: ''
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DETAIL:
      return {
        ...state,
        profile: action.profile
      };
    case ADD_POST: {
      const newPost = {
        id: 5,
        postText: state.newPostText
      };
      return {
        posts: [...state.posts, newPost],
        newPostText: ''
      };
    }
    case UPDATE_NEW_POST_TEXT:
      return {
        posts: [...state.posts],
        newPostText: action.newText
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      };
    default:
      return state;
  }
};

export default profileReducer;
export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  };
};
export const updateNewPostActionCreator = text => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  };
};
const userDetailActionCreator = profile => {
  return {
    type: SET_USER_DETAIL,
    profile
  };
};
export const setStatusActionCreator = status => {
  return {
    type: SET_STATUS,
    status
  };
};
export const userDetail = userId => {
  return dispatch => {
    profileAPI.getProfile(userId).then(data => {
      dispatch(userDetailActionCreator(data));
    });
  };
};
export const getStatus = userId => {
  return dispatch => {
    profileAPI.getStatus(userId).then(data => {
      dispatch(setStatusActionCreator(data));
    });
  };
};
export const updateStatus = status => {
  return dispatch => {
    profileAPI.updateStatus(status).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setStatusActionCreator(status));
      }
    });
  };
};
