import './index.css';
import { addPostActionCreator } from '../../../redux/profile-reducer';
import { MyPost } from './index';
import connect from 'react-redux/es/connect/connect';

const mapStateToProps = state => {
  return {
    posts: state.profileReducer.posts
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addPost: post => {
      dispatch(addPostActionCreator(post));
    }
  };
};

const MyPostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPost);

export default MyPostContainer;
