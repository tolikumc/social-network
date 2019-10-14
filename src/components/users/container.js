import UsersApiComponent from './api-container';
import { connect } from 'react-redux';
import {
  Follow,
  followProgressActionCreator,
  getRequestUsers,
  setCurrentPageActionCreate,
  Unfollow
} from '../../redux/user-reducer';
import { WithAuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';
import {
  getCurrentPage,
  getFetching,
  getFollowingProgress,
  getPageSize,
  getTotalUserCount,
  getUsers
} from '../../redux/users-selectors';

const mapStateToProps = state => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUserCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getFetching(state),
    followProgress: getFollowingProgress(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    follow: userId => {
      dispatch(Follow(userId));
    },
    unfollow: userId => {
      dispatch(Unfollow(userId));
    },
    setCurrentPage: currentPage => {
      dispatch(setCurrentPageActionCreate(currentPage));
    },
    setFollowProgress: (id, isFetching) => {
      dispatch(followProgressActionCreator(id, isFetching));
    },
    getUsers: (currentPage, pageSize) => {
      dispatch(getRequestUsers(currentPage, pageSize));
    }
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  WithAuthRedirect
)(UsersApiComponent);
