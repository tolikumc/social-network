import React from 'react';
import './index.css';
import {DialogItem} from "./dialog";
import {Message} from "./message";



const Dialogs = () => {

    const nameData = [
        {name: 'Tolik', id: 1},
        {name: 'Kost', id: 2},
        {name: 'Alina', id: 3},
        {name: 'Toxa', id: 4},
    ];
    const messageData = [
        {message: 'How', id: 1},
        {message: 'Do', id: 2},
        {message: 'You', id: 3},
        {message: 'Do', id: 4},
    ];


    return (
        <div className='dialogs'>
            <div className='dialogs-items'>
                {nameData.map((item) => <DialogItem name={item.name} id={item.id} key={item.name}/>)}

            </div>
            <div className='dialogs-message'>
                {messageData.map((item) => <Message message={item.message} key={item.id + item.message}/>)}
            </div>
        </div>
    )
};

export default Dialogs;
