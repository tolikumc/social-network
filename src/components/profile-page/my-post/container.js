import React from 'react';
import './index.css'
import {updateNewPostActionCreator, addPostActionCreator} from "../../../redux/profile-reducer";
import {MyPost} from "./index";


export const MyPostContainer = (props) => {
    console.log(props);

    const onPostChange = (text) => {
        props.dispatch(updateNewPostActionCreator(text))
    };

    const addPost = () => {
        props.dispatch(addPostActionCreator())
    };

    return (<MyPost updateNewPost={onPostChange} addPost={addPost} posts={props.posts}/>)
};
