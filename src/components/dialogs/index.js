import React from 'react';
import './index.css';
import { DialogItem } from './dialog';
import { Message } from './message';
import { Redirect } from 'react-router-dom';

const Dialogs = props => {
  const { dialogs, messages, newMessageBody, isAuth } = props;
  const onSendMessageClick = () => {
    props.sendMessage();
  };
  const onNewMessageChange = e => {
    const body = e.target.value;
    props.updateNewMessageBody(body);
  };

  if (isAuth === false) {
    return <Redirect to={'/login'} />;
  }
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
            <div>
              <textarea
                placeholder="Enter your message"
                onChange={onNewMessageChange}
                value={newMessageBody}
              />
            </div>
            <div>
              <button onClick={onSendMessageClick}>SEND</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
