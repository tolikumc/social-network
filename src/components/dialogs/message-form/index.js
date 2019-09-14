import React from 'react';
import { Field, reduxForm } from 'redux-form';

const MessageForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component="textarea"
        name="textarea"
        placeholder="Write your message"
      />
      <div>
        <button>send</button>
      </div>
    </form>
  );
};

export const AddMessageForm = reduxForm({ form: 'addMessageForm' })(
  MessageForm
);
