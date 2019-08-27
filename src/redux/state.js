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
            ]
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
        if (action.type === 'ADD-POST'){
            const newPost = {
                id: 5,
                postText: this._state.profilePage.newPostText
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = 'sda';
            this._callSubscriber(this._state)
        }else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        }
    }
};


export default store
