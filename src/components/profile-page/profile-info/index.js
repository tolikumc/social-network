import React from 'react';
import './index.css';
import Preloader from '../../common/preloader';

export const ProfileInfo = props => {
  if (!props.profile || props.profile.length === 0) {
    return <Preloader />;
  }
  return (
    <div>
      <div className="p-image">
        <img src={props.profile.photos.large} alt="sdsa" />
      </div>
      <div className="p-info">ava + desc</div>
    </div>
  );
};
