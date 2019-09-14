import React from 'react';
import './index.css';
import { DialogItem } from './dialog';
import { Message } from './message';
import { AddMessageForm } from './message-form';

const Dialogs = props => {
  const { dialogs, messages } = props;
  const addNewMessage = messageData => {
    props.sendMessage(messageData.textarea);
  };

  return (
    <div className="dialogs">
      <div className="dialogs-items">
        {dialogs.map(item => (
          <DialogItem name={item.name} id={item.id} key={item.name} />
        ))}
      </div>
      <div className="dialogs-message">
        <div>
          <div>
            {messages.map(item => (
              <Message message={item.message} key={item.id + item.message} />
            ))}
          </div>
          <div>
            <AddMessageForm onSubmit={addNewMessage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
