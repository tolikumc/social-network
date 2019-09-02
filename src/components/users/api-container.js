import React from 'react';
import * as axios from 'axios';
import { Users } from './index';

class UsersApiComponent extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then(res => {
        this.props.setUsers(res.data.items);
        this.props.setTotalUsersCount(res.data.totalCount);
      });
  }

  onPageChange = numberPage => {
    this.props.setCurrentPage(numberPage);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${numberPage}&count=${this.props.pageSize}`
      )
      .then(res => {
        this.props.setUsers(res.data.items);
      });
  };

  render() {
    const {
      totalUsersCount,
      pageSize,
      currentPage,
      users,
      follow,
      unfollow
    } = this.props;
    return (
      <Users
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        users={users}
        onPageChange={this.onPageChange}
        follow={follow}
        unffollow={unfollow}
      />
    );
  }
}

export default UsersApiComponent;
