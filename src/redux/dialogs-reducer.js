const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';

const initialState = {
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
  ]
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_NEW_MESSAGE: {
      const newMessage = {
        id: 78,
        message: action.message
      };
      return {
        dialogs: [...state.dialogs],
        messages: [...state.messages, newMessage]
      };
    }
    default:
      return state;
  }
};

export const sendMessageCreator = message => {
  return { type: SEND_NEW_MESSAGE, message };
};

export default dialogsReducer;
