import React from 'react';
import { Field, reduxForm } from 'redux-form';

const PostForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component="textarea" placeholder="Your new post" />
      <div>
        <button>Post</button>
      </div>
    </form>
  );
};

export const AddPost = reduxForm({ form: 'postForm' })(PostForm);
