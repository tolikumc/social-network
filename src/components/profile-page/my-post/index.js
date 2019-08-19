import React from 'react';
import {Post} from "./post";
import './index.css'


export const MyPost = () => {

    const postData = [
        {postText: 'Hi, how are you?', id: '123412'},
        {postText: 'Its my first post', id: '23423sad'},
    ];
    return (

        <div className="post-block">
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add</button>
                </div>
            </div>
            <div className="post-message">
                {postData.map((item) => <Post postText={item.postText} key={item.id}/>)}
            </div>
        </div>
    )
};
