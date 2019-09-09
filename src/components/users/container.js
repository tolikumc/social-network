import UsersApiComponent from './api-container';
import { connect } from 'react-redux';
import {
  Follow,
  followProgressActionCreator,
  getUsers,
  setCurrentPageActionCreate,
  Unfollow
} from '../../redux/user-reducer';
import { WithAuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';

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
      dispatch(getUsers(currentPage, pageSize));
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
