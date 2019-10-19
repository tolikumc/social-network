import React from 'react';
import userPhoto from '../../static/img/avatar.jpg';
import { NavLink } from 'react-router-dom';
import { Paginator } from '../common/paginator/paginator';

export const Users = ({
  currentPage,
  onPageChange,
  totalUsersCount,
  pageSize,
  ...props
}) => {
  const pageCount = Math.ceil(totalUsersCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <Paginator
        currentPage={currentPage}
        onPageChange={onPageChange}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
      />
      {props.users.map(user => (
        <div key={user.id}>
          <span>
            <div>
              <NavLink to={`/profile/${user.id}`}>
                <img
                  src={
                    user.photos.small != null ? user.photos.small : userPhoto
                  }
                  alt="avatar"
                />
              </NavLink>
            </div>
            <div>
              {user.followed ? (
                <button
                  disabled={props.followProgress[user.id]}
                  onClick={() => {
                    props.unfollow(user.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followProgress[user.id]}
                  onClick={() => {
                    props.follow(user.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{'user.location.city'}</div>
              <div>{'user.location.country'}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};
