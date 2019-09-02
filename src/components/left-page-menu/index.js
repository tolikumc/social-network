import React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';

export const LeftMenu = () => {
  return (
    <nav className="navigation">
      <div className="item">
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div className="item">
        <NavLink to="/dialogs">Messages</NavLink>
      </div>
      <div className="item">
        <NavLink to="/users">Users</NavLink>
      </div>
      <div className="item">
        <NavLink to="/news">News</NavLink>
      </div>
      <div className="item">
        <NavLink to="/music">Music</NavLink>
      </div>
      <div className="item">
        <NavLink to="/settings">Settings</NavLink>
      </div>
    </nav>
  );
};
