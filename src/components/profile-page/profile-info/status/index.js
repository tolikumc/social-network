import React, { useState, useEffect } from 'react';

export const Status = props => {
  const [editMode, setMode] = useState(false);
  const [status, setStatus] = useState(props.status);
  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);
  return (
    <>
      {editMode ? (
        <div>
          <input
            onBlur={() => {
              setMode(false);
              props.updateStatus(status);
            }}
            onChange={e => setStatus(e.target.value)}
            value={status}
          />
        </div>
      ) : (
        <div>
          <span onDoubleClick={setMode(true)}>{status ? status : ''}</span>
        </div>
      )}
    </>
  );
};
