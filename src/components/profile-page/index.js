import React from 'react';
import './index.css';
import { ProfileInfo } from './profile-info';
import MyPostContainer from './my-post/container';
import { Redirect } from 'react-router-dom';

export const Profile = props => {
  const { isAuth } = props;

  if (isAuth === false) {
    return <Redirect to={'/login'} />;
  }
  return (
    <div>
      <ProfileInfo profile={props.profile} />
      <MyPostContainer />
    </div>
  );
};
