import React from 'react';
import userPhoto from '../../static/img/avatar.jpg';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

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
                    props.setFollowProgress(user.id, true);
                    axios
                      .delete(
                        `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                        {
                          withCredentials: true,
                          headers: {
                            'API-KEY': 'a30a7578-4a93-4950-902b-74a89aa7de7a'
                          }
                        }
                      )
                      .then(res => {
                        if (res.data.resultCode === 0) {
                          props.unfollow(user.id);
                        }
                        props.setFollowProgress(user.id, false);
                      });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followProgress[user.id]}
                  onClick={() => {
                    props.setFollowProgress(user.id, true);
                    axios
                      .post(
                        `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                        {},
                        {
                          withCredentials: true,
                          headers: {
                            'API-KEY': 'a30a7578-4a93-4950-902b-74a89aa7de7a'
                          }
                        }
                      )
                      .then(res => {
                        if (res.data.resultCode === 0) {
                          props.follow(user.id);
                        }
                        props.setFollowProgress(user.id, false);
                      });
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
