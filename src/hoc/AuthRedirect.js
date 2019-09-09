import React from 'react';
import { Redirect } from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';

const mapStateToProps = state => {
  return {
    isAuth: state.authReducer.isAuth
  };
};

export const WithAuthRedirect = Component => {
  class RedirectComponent extends React.Component {
    render() {
      if (this.props.isAuth === false) {
        return <Redirect to={'/login'} />;
      }
      return <Component {...this.props} />;
    }
  }

  return connect(mapStateToProps)(RedirectComponent);
};
