import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../common/FormControl';
import { maxLengthCreator, requiredField } from '../../../utils/validators';

const validLength = maxLengthCreator(10);

const MessageForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name="textarea"
        placeholder="Write your message"
        validator={[requiredField, validLength]}
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
