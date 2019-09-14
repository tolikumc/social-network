import React from 'react';
import { ReduxLoginForm } from './login-form';

export const LoginPage = () => {
  const onSubmitForm = () => {}; //formData
  return (
    <div>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmitForm} />
    </div>
  );
};
