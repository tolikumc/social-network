import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, requiredField } from '../../../../utils/validators';
import { Textarea } from '../../../common/FormControl';
const validLength = maxLengthCreator(2);
const PostForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        placeholder="Your new post"
        validate={[requiredField, validLength]}
        name="postText"
      />
      <div>
        <button>Post</button>
      </div>
    </form>
  );
};

export const AddPost = reduxForm({ form: 'postForm' })(PostForm);
