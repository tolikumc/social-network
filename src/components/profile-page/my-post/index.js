import React from 'react';
import {Post} from "./post";
import './index.css'


export const MyPost = (props) => {

    return (

        <div className="post-block">
            <h3>My post</h3>
            <div>
                <div>
                    <textarea/>
                </div>
                <div>
                    <button>Add</button>
                </div>
            </div>
            <div className="post-message">
                {props.posts.map((item) => <Post postText={item.postText} key={item.id}/>)}
            </div>
        </div>
    )
};
