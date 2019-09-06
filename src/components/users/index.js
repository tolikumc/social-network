import React from 'react';
import userPhoto from '../../static/img/avatar.jpg';
import { NavLink } from 'react-router-dom';

export const Users = props => {
  const pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.map(el => (
          <span
            key={el}
            className={
              props.currentPage === el
                ? 'selected_pagination_item'
                : 'pagination_item'
            }
            onClick={() => props.onPageChange(el)}
          >
            {el}
          </span>
        ))}
      </div>
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
