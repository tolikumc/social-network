import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';

let store = {
  _state: {
    profilePage: {
      posts: [
        { postText: 'Hi, how are you?', id: '123412' },
        { postText: 'Its my first post', id: '23423sad' }
      ],
      newPostText: ''
    },
    dialogsPage: {
      dialogs: [
        { name: 'Tolik', id: 1 },
        { name: 'Yura', id: 2 },
        { name: 'Oleg', id: 3 },
        { name: 'Ivan', id: 4 }
      ],
      messages: [
        { message: 'How', id: 1 },
        { message: 'Do', id: 2 },
        { message: 'You', id: 3 },
        { message: 'Do', id: 4 }
      ],
      newMessageBody: ''
    }
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {},
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  }
};

export default store;
