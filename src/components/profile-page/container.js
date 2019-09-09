import React from 'react';
import { connect } from 'react-redux';
import { Profile } from './index';
import { withRouter } from 'react-router-dom';
import { userDetail } from '../../redux/profile-reducer';
// import { WithAuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';

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
    profile: state.profileReducer.profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserDetail: userId => {
      dispatch(userDetail(userId));
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
