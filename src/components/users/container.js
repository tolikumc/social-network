import UsersApiComponent from './api-container';
import { connect } from 'react-redux';
import {
  followActionCreator,
  followProgressActionCreator,
  getUsers,
  setCurrentPageActionCreate,
  unfollowActionCreator
} from '../../redux/user-reducer';

const mapStateToProps = state => {
  return {
    users: state.usersReducer.users,
    pageSize: state.usersReducer.pageSize,
    totalUsersCount: state.usersReducer.totalUserCount,
    currentPage: state.usersReducer.currentPage,
    isFetching: state.usersReducer.isFetching,
    followProgress: state.usersReducer.followingInProgress
  };
};

const mapDispatchToProps = dispatch => {
  return {
    follow: userID => {
      dispatch(followActionCreator(userID));
    },
    unfollow: userID => {
      dispatch(unfollowActionCreator(userID));
    },
    setCurrentPage: currentPage => {
      dispatch(setCurrentPageActionCreate(currentPage));
    },
    setFollowProgress: (id, isFetching) => {
      dispatch(followProgressActionCreator(id, isFetching));
    },
    getUsers: (currentPage, pageSize) => {
      dispatch(getUsers(currentPage, pageSize));
    }
  };
};

const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersApiComponent);

export default UsersContainer;
