import React from 'react';
import {Post} from "./post";
import './index.css'


export const MyPost = (props) => {
    const newPostElement = React.createRef();
    const onPostChange = () => {
        const text = newPostElement.current.value;
        props.updateNewPost(text)
    };

    const onAddPost = () => {
       props.addPost()
    };

    return (

        <div className="post-block">
            <h3>My post</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add</button>
                </div>
            </div>
            <div className="post-message">
                {props.posts.map((item) => <Post postText={item.postText} key={item.id}/>)}
            </div>
        </div>
    )
};
