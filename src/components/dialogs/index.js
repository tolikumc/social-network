import React from 'react';
import './index.css';
import {DialogItem} from "./dialog";
import {Message} from "./message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {
    const {newMessageBody} = props.state.dialogsPage;
    const state = props.store.getState().dialogsPage;
    console.log(props);
    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    };
    const onNewMessageChange = (e) => {
        const body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    };


    return (
        <div className='dialogs'>
            <div className='dialogs-items'>
                {state.dialogs.map((item) => <DialogItem name={item.name} id={item.id} key={item.name}/>)}

            </div>
            <div className='dialogs-message'>
                <div>
                    <div>
                        {state.messages.map((item) => <Message message={item.message}
                                                               key={item.id + item.message}/>)}
                    </div>
                    <div>
                        <div>
                            <textarea placeholder='Enter your message'
                                      onChange={onNewMessageChange} defaultValue={newMessageBody}/>
                        </div>
                        <div>
                            <button onClick={onSendMessageClick}>SEND</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;
