import UsersApiComponent from './api-container';
import { connect } from 'react-redux';
import {
  followActionCreator,
  setCurrentPageActionCreate,
  setTotalUsersCountActionCreate,
  setUsersActionCreate,
  unfollowActionCreator
} from '../../redux/user-reducer';

const mapStateToProps = state => {
  return {
    users: state.usersReducer.users,
    pageSize: state.usersReducer.pageSize,
    totalUsersCount: state.usersReducer.totalUserCount,
    currentPage: state.usersReducer.currentPage
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
    setUsers: users => {
      dispatch(setUsersActionCreate(users));
    },
    setCurrentPage: currentPage => {
      dispatch(setCurrentPageActionCreate(currentPage));
    },
    setTotalUsersCount: total => {
      dispatch(setTotalUsersCountActionCreate(total));
    }
  };
};

const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersApiComponent);

export default UsersContainer;
