const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';


const initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                dialogs: [...state.dialogs],
                messages: [...state.messages],
                newMessageBody: action.body
            };
        case SEND_NEW_MESSAGE:
            const body = state.newMessageBody;
            const newMessage = {
                id: 78,
                message: body
            };
            return {
                dialogs: [...state.dialogs],
                newMessageBody: '',
                messages: [...state.messages, newMessage]
            };
        default:
            return state;
    }

};


export const sendMessageCreator = () => {
    return {type: SEND_NEW_MESSAGE}
};
export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
};

export default dialogsReducer;
