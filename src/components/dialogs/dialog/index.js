import { NavLink } from 'react-router-dom';
import React from 'react';

export const DialogItem = props => {
  const { name, id } = props;
  return (
    <div className="d-item active">
      <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
    </div>
  );
};
