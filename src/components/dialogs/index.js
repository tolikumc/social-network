import React from 'react';
import './index.css';
import {DialogItem} from "./dialog";
import {Message} from "./message";



const Dialogs = (props) => {

    return (
        <div className='dialogs'>
            <div className='dialogs-items'>
                {props.dialogs.map((item) => <DialogItem name={item.name} id={item.id} key={item.name}/>)}

            </div>
            <div className='dialogs-message'>
                {props.messages.map((item) => <Message message={item.message} key={item.id + item.message}/>)}
            </div>
        </div>
    )
};

export default Dialogs;
