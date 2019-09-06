import React from 'react';
import { connect } from 'react-redux';
import { Profile } from './index';
import { withRouter } from 'react-router-dom';
import { userDetail } from '../../redux/profile-reducer';

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withUrlDataContainerComponent);
