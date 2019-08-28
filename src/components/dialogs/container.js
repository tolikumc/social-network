import React from 'react';
import './index.css';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./index";


const DialogsContainer = (props) => {
    const onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    };
    const onNewMessageChange = (body) => {
        props.dispatch(updateNewMessageBodyCreator(body))
    };


    return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
                    state={props.state}/>
};

export default DialogsContainer;
