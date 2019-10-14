import React from 'react';
import './index.css';
import Preloader from '../../common/preloader';
import { Status } from './status';

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
      <Status status={props.status.data} updateStatus={props.updateStatus} />
    </div>
  );
};
