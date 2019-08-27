import React from 'react';
import {Post} from "./post";
import './index.css'
import {updateNewPostActionCreator, addPostActionCreator} from "../../../redux/profile-reducer";


export const MyPost = (props) => {
    const newPostElement = React.createRef();

    const onPostChange = () => {
        const text = newPostElement.current.value;
        props.dispatch(updateNewPostActionCreator(text))
    };

    const addPost = () => {
        props.dispatch(addPostActionCreator())
    };

    return (

        <div className="post-block">
            <h3>My post</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} defaultValue={props.newPostText} onChange={onPostChange}/>
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
