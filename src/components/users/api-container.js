import React from 'react';
import * as axios from 'axios';
import { Users } from './index';
import Preloader from '../common/preloader';

class UsersApiComponent extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
        {
          withCredentials: true
        }
      )
      .then(res => {
        this.props.setIsFetching(false);
        this.props.setUsers(res.data.items);
        this.props.setTotalUsersCount(res.data.totalCount);
      });
  }

  onPageChange = numberPage => {
    this.props.setCurrentPage(numberPage);
    this.props.setIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${numberPage}&count=${this.props.pageSize}`,
        {
          withCredentials: true
        }
      )
      .then(res => {
        this.props.setIsFetching(false);
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
          unffollow={unfollow}
        />
      </>
    );
  }
}

export default UsersApiComponent;
