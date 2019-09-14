import React from 'react';
import { Post } from './post';
import './index.css';
import { AddPost } from './post-form';

export const MyPost = props => {
  const onAddPost = post => {
    props.addPost(post.undefined);
  };

  return (
    <div className="post-block">
      <h3>My post</h3>
      <div>
        <div>
          <AddPost onSubmit={onAddPost} />
        </div>
      </div>
      <div className="post-message">
        {props.posts.map(item => (
          <Post postText={item.postText} key={item.id} />
        ))}
      </div>
    </div>
  );
};
