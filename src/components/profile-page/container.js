import React from 'react';
import { connect } from 'react-redux';
import { Profile } from './index';
import { withRouter } from 'react-router-dom';
import { userDetail } from '../../redux/profile-reducer';
import { WithAuthRedirect } from '../../hoc/AuthRedirect';

export class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId;
    this.props.getUserDetail(userId);
  }

  render() {
    return (
      <div>
        <Profile profile={this.props} {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profileReducer.profile,
    isAuth: state.authReducer.isAuth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserDetail: userId => {
      dispatch(userDetail(userId));
    }
  };
};

const withUrlDataContainerComponent = withRouter(ProfileContainer);

const Ttt = connect(
  mapStateToProps,
  mapDispatchToProps
)(withUrlDataContainerComponent);

const AuthRedirectComponent = WithAuthRedirect(Ttt);
export default AuthRedirectComponent;
