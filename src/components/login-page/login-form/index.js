import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component="input" name={'login'} placeholder="login" />
      </div>
      <div>
        <Field
          type="password"
          name={'password'}
          component="input"
          placeholder="password"
        />
      </div>
      <div>
        <Field component="input" type="checkbox" name={'remberMe'} />
        remember me
      </div>
      <div>
        <button>login</button>
      </div>
    </form>
  );
};

export const ReduxLoginForm = reduxForm({
  // a unique name for the form
  form: 'login'
})(LoginForm);
