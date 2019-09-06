import { userAPI } from '../api/api';

const FOLLOW_FOR_NEW_USER = 'FOLLOW_FOR_NEW_USER';
const UNFOLLOW_FOR_USER = 'UNFOLLOW_FOR_USER';
const SET_USER = 'SET_USER';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

const initialState = {
  users: [],
  pageSize: 5,
  totalUserCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: {}
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        users: action.users
      };
    case SET_TOTAL_USER_COUNT:
      return {
        ...state,
        totalUserCount: action.total
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: {
          ...state.followingInProgress,
          [action.payload.userId]: action.payload.isFetching
        }
      };
    case FOLLOW_FOR_NEW_USER:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userID) {
            return { ...user, followed: true };
          }
          return { ...user };
        })
      };
    case UNFOLLOW_FOR_USER:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userID) {
            return { ...user, followed: false };
          }
          return { ...user };
        })
      };
    default:
      return state;
  }
};

export const followActionCreator = userID => {
  return { type: FOLLOW_FOR_NEW_USER, userID };
};
export const followProgressActionCreator = (userId, isFetching) => {
  return {
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    payload: { userId, isFetching }
  };
};
export const unfollowActionCreator = userID => {
  return {
    type: UNFOLLOW_FOR_USER,
    userID
  };
};
export const setUsersActionCreate = users => {
  return { type: SET_USER, users };
};
export const setIsFetchingActionCreate = isFetching => {
  return { type: TOGGLE_IS_FETCHING, isFetching };
};
export const setTotalUsersCountActionCreate = total => {
  return { type: SET_TOTAL_USER_COUNT, total };
};
export const setCurrentPageActionCreate = currentPage => {
  return { type: SET_CURRENT_PAGE, currentPage };
};

export const getUsers = (currentPage, pageSize) => {
  return dispatch => {
    dispatch(setIsFetchingActionCreate(true));
    userAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(setIsFetchingActionCreate(false));
      dispatch(setUsersActionCreate(data.items));
      dispatch(setTotalUsersCountActionCreate(data.totalCount));
    });
  };
};

export const Unfollow = userId => {
  return dispatch => {
    dispatch(followProgressActionCreator(userId, true));
    userAPI.unfollow(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(unfollowActionCreator(userId));
      }
      dispatch(followProgressActionCreator(userId, false));
    });
  };
};
export const Follow = userId => {
  return dispatch => {
    dispatch(followProgressActionCreator(userId, true));
    userAPI.follow(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(followActionCreator(userId));
      }
      dispatch(followProgressActionCreator(userId, false));
    });
  };
};

export default usersReducer;
