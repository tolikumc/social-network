const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';


const dialogsReducer = (state, action) => {
    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_NEW_MESSAGE:
            const body = state.newMessageBody;
            const newMessage = {
                id: 78,
                message: body
            };
            state.messages.push(newMessage);
            state.newMessageBody = ' ';
            return state;
        default:
            return state;
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

export default dialogsReducer;
