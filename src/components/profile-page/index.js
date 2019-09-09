import React from 'react';
import './index.css';
import { ProfileInfo } from './profile-info';
import MyPostContainer from './my-post/container';
import { Redirect } from 'react-router-dom';

export const Profile = props => {

  return (
    <div>
      <ProfileInfo profile={props.profile} />
      <MyPostContainer />
    </div>
  );
};
