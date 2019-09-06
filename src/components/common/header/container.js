import React from 'react';
import { Header } from './index';
import { connect } from 'react-redux';
import { setUserDataActionCreator } from '../../../redux/auth-reducer';
import { authAPI } from '../../../api/api';

class HeaderContainer extends React.Component {
  componentDidMount() {
    authAPI.auth().then(data => {
      if (data.resultCode === 0) {
        const { id, login, email } = data.data;
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
