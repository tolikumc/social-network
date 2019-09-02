import React from 'react';
import classes from './index.module.css';

export const Post = props => {
  const { postText } = props;
  return (
    <div className={classes.item}>
      <img src="" alt="" />
      {postText}
      <div>
        <span>Like</span>
      </div>
    </div>
  );
};
