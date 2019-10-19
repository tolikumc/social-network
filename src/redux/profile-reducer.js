import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_DETAIL = 'SET_USER_DETAIL';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

const initialState = {
  posts: [
    { postText: 'Hi, how are you?', id: '123412' },
    { postText: 'Its my first post', id: '23423sad' }
  ],
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
        postText: action.post
      };
      return {
        posts: [...state.posts, newPost]
      };
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter(p => p !== action.id)
      };
    }
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
export const addPostActionCreator = post => {
  return {
    type: ADD_POST,
    post
  };
};
export const deletePostActionCreator = id => {
  return {
    type: DELETE_POST,
    id
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
