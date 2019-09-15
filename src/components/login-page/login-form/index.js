import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../../common/FormControl';
import { requiredField } from '../../../utils/validators';

const LoginForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Input}
          name={'login'}
          placeholder="login"
          validate={[requiredField]}
        />
      </div>
      <div>
        <Field
          type="password"
          name={'password'}
          component={Input}
          placeholder="password"
        />
      </div>
      <div>
        <Field
          component="input"
          type="checkbox"
          name={'remberMe'}
          validate={[requiredField]}
        />
        remember me
      </div>
      <div>
        <button>login</button>
      </div>
    </form>
  );
};

export const ReduxLoginForm = reduxForm({
  form: 'login'
})(LoginForm);
