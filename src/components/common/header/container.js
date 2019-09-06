import React from 'react';
import { Header } from './index';
import { connect } from 'react-redux';
import { signIn } from '../../../redux/auth-reducer';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.setLogin();
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
    setLogin: () => dispatch(signIn())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);
