import React from 'react';
import { ReduxLoginForm } from './login-form';
import { connect } from 'react-redux';
import { signUp } from '../../redux/auth-reducer';

const LoginPage = props => {
  const onSubmitForm = formDate => {
    props.login(formDate.email, formDate.password, formDate.rememberMe);
  };
  return (
    <div>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmitForm} />
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password, rememberMe) => {
      dispatch(signUp(email, password, rememberMe));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LoginPage);
