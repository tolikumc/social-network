import React from 'react';
import classes from './index.module.css';
import {MyPost} from "./my-post/index";
import {ProfileInfo} from "./profile-info";


export const ProfilePage = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPost/>
        </div>
    )
};
