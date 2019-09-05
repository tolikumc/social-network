import React from 'react';
import { Users } from './index';
import Preloader from '../common/preloader';
import { userAPI } from '../../api/api';

class UsersApiComponent extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
      this.props.setIsFetching(false);
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount);
    });
  }

  onPageChange = numberPage => {
    this.props.setCurrentPage(numberPage);
    this.props.setIsFetching(true);
    userAPI.getUsers(numberPage, this.props.pageSize).then(data => {
      this.props.setIsFetching(false);
      this.props.setUsers(data.items);
    });
  };

  render() {
    const {
      totalUsersCount,
      pageSize,
      currentPage,
      users,
      follow,
      unfollow,
      isFetching
    } = this.props;
    return (
      <>
        {isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={totalUsersCount}
          pageSize={pageSize}
          currentPage={currentPage}
          users={users}
          onPageChange={this.onPageChange}
          follow={follow}
          unfollow={unfollow}
        />
      </>
    );
  }
}

export default UsersApiComponent;
