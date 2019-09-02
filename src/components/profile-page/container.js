import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { userDetailActionCreator } from '../../redux/profile-reducer';
import { Profile } from './index';
import { withRouter } from 'react-router-dom';

export class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(res => {
        this.props.userDetail(res.data);
      });
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
    userDetail: profile => {
      dispatch(userDetailActionCreator(profile));
    }
  };
};

const withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withUrlDataContainerComponent);
