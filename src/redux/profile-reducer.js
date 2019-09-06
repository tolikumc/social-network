import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_DETAIL = 'SET_USER_DETAIL';

const initialState = {
  posts: [
    { postText: 'Hi, how are you?', id: '123412' },
    { postText: 'Its my first post', id: '23423sad' }
  ],
  newPostText: '',
  profile: []
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

export const userDetail = userId => {
  return dispatch => {
    profileAPI.getProfile(userId).then(data => {
      dispatch(userDetailActionCreator(data));
    });
  };
};
