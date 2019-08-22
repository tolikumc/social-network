import React from 'react';
import {Post} from "./post";
import './index.css'


export const MyPost = (props) => {
    const newPostElement = React.createRef();

    const addPost = () =>{
        const text = newPostElement.current.value;
        props.addPostToState(text)
    };

    return (

        <div className="post-block">
            <h3>My post</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}/>
                </div>
                <div>
                    <button onClick={addPost}>Add</button>
                </div>
            </div>
            <div className="post-message">
                {props.posts.map((item) => <Post postText={item.postText} key={item.id}/>)}
            </div>
        </div>
    )
};
