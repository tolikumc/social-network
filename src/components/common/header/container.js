import React from 'react';
import { Header } from './index';
import { connect } from 'react-redux';
import * as axios from 'axios';
import { setUserDataActionCreator } from '../../../redux/auth-reducer';

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true
      })
      .then(res => {
        if (res.data.resultCode === 0) {
          const { id, login, email } = res.data.data;
          this.props.setLogin(id, login, email);
        }
      });
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.authReducer.isAuth,
    login: state.authReducer.login
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLogin: (id, login, email) =>
      dispatch(setUserDataActionCreator(id, login, email))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);
