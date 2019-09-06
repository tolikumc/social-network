import React from 'react';
import { Users } from './index';
import Preloader from '../common/preloader';

class UsersApiComponent extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChange = numberPage => {
    this.props.getUsers(numberPage, this.props.pageSize);
  };

  render() {
    const {
      totalUsersCount,
      pageSize,
      currentPage,
      users,
      follow,
      unfollow,
      isFetching,
      followProgress,
      setFollowProgress
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
          followProgress={followProgress}
          setFollowProgress={setFollowProgress}
        />
      </>
    );
  }
}

export default UsersApiComponent;
