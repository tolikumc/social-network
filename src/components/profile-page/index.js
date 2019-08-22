import React from 'react';
import './index.css';
import {MyPost} from "./my-post/index";
import {ProfileInfo} from "./profile-info";


export const ProfilePage = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPost posts={props.posts} addPostToState={props.addPostToState}/>
        </div>
    )
};
