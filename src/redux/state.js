const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';


let store = {
    _state: {
        profilePage: {
            posts: [
                {postText: 'Hi, how are you?', id: '123412'},
                {postText: 'Its my first post', id: '23423sad'}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {name: 'Tolik', id: 1},
                {name: 'Yura', id: 2},
                {name: 'Oleg', id: 3},
                {name: 'Ivan', id: 4},
            ],
            messages: [
                {message: 'How', id: 1},
                {message: 'Do', id: 2},
                {message: 'You', id: 3},
                {message: 'Do', id: 4},
            ],
            newMessageBody: '',
        }
    },
    getState(){
        return this._state
    },
    _callSubscriber() {
        console.log('State change');
    },
    subscribe (observer) {
        this._callSubscriber = observer
    },
    dispatch(action){
        if (action.type === ADD_POST){
            const newPost = {
                id: 5,
                postText: this._state.profilePage.newPostText
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = 'sda';
            this._callSubscriber(this._state)
        }else if (action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        }else if (action.type === UPDATE_NEW_MESSAGE_BODY ){
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state)
        }else if(action.type === SEND_NEW_MESSAGE){
            const body = this._state.dialogsPage.newMessageBody;
            const newMessage = {
                id: 78,
                message: body
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageBody = ' ';
            this._callSubscriber(this._state)

        }
    }
};
export const addPostActionCreator = () =>{
    return {
        type: ADD_POST
    }
};

export const updateNewPostActionCreator = (text) =>{
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
};

export const sendMessageCreator = ()=>{
    return {type: SEND_NEW_MESSAGE}
};
export const updateNewMessageBodyCreator = (body)=>{
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
};


export default store
