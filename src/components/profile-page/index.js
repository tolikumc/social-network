import React from 'react';
import './index.css';
import { ProfileInfo } from './profile-info';
import MyPostContainer from './my-post/container';

export const Profile = props => {
  return (
    <div>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.getUserUpdateStatus}
      />
      <MyPostContainer />
    </div>
  );
};
