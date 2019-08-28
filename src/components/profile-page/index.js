import React from 'react';
import './index.css';
import {ProfileInfo} from "./profile-info";
import {MyPostContainer} from "./my-post/container";


export const ProfilePage = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostContainer posts={props.posts} dispatch={props.dispatch}/>
        </div>
    )
};
