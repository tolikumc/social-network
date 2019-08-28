import React from 'react';
import './index.css';
import {ProfileInfo} from "./profile-info";
import MyPostContainer from "./my-post/container";


export const ProfilePage = () => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostContainer/>
        </div>
    )
};
