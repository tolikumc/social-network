const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


const initialState = {
    posts: [
        {postText: 'Hi, how are you?', id: '123412'},
        {postText: 'Its my first post', id: '23423sad'}
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                postText: state.newPostText
            };
            state.posts.push(newPost);
            state.newPostText = ' ';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.profilePage.newPostText = action.newText;
            return state;
        default:
            return state
    }


};

export default profileReducer;


export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};

export const updateNewPostActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
};
