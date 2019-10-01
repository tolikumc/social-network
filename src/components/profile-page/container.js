import React from 'react';
import { connect } from 'react-redux';
import { Profile } from './index';
import { withRouter } from 'react-router-dom';
import {
  userDetail,
  getStatus,
  updateStatus
} from '../../redux/profile-reducer';
// import { WithAuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';

export class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
    }
    this.props.getUserDetail(userId);
    this.props.getUserStatus(userId);
  }

  render() {
    return (
      <div>
        <Profile
          profile={this.props}
          status={this.props.status}
          {...this.props}
          updateStatus={this.props.getUserUpdateStatus}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profileReducer.profile,
    status: state.profileReducer.status,
    authorizedUserId: state.authReducer.userId,
    isAuth: state.authReducer.isAuth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserDetail: userId => {
      dispatch(userDetail(userId));
    },
    getUserStatus: userId => {
      dispatch(getStatus(userId));
    },
    getUserUpdateStatus: status => {
      dispatch(updateStatus(status));
    }
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withRouter
  // WithAuthRedirect
)(ProfileContainer);
