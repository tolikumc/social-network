import React from 'react';
import { Header } from './index';
import { connect } from 'react-redux';
import * as axios from 'axios';
import { setUserDataActionCreator } from '../../../redux/auth-reducer';

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true
    });
    // .then(res => {
    //   if (res.props.resultCode === 0) {
    //     const { userId, login, email } = res.data.data;
    //     this.props.setLogin(userId, login, email);
    //   }
    // });
  }
  render() {
    return <Header />;
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.authReducer.isAuth,
    loginName: state.authReducer.login
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLogin: () => dispatch(setUserDataActionCreator())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);
