import './index.css'
import {updateNewPostActionCreator, addPostActionCreator} from "../../../redux/profile-reducer";
import {MyPost} from "./index";
import connect from "react-redux/es/connect/connect";


const mapStateToProps = (state) => {
    return {
        posts: state.profileReducer.posts,
        newPostText: state.profileReducer.newPostText
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPost: (text) => {
            dispatch(updateNewPostActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        },
    }
};


const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer
