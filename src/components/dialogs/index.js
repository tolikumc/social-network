import React from 'react';
import './index.css';
import { DialogItem } from './dialog';
import { Message } from './message';

const Dialogs = props => {
  const { newMessageBody } = props.state.dialogsReducer;
  const { state } = props;
  const onSendMessageClick = () => {
    props.sendMessage();
  };
  const onNewMessageChange = e => {
    const body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className="dialogs">
      <div className="dialogs-items">
        {state.dialogsReducer.dialogs.map(item => (
          <DialogItem name={item.name} id={item.id} key={item.name} />
        ))}
      </div>
      <div className="dialogs-message">
        <div>
          <div>
            {state.dialogsReducer.messages.map(item => (
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
