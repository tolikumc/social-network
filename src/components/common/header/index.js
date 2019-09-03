import React from 'react';
import classes from './index.module.css';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={classes.header}>
      <img
        src="https://images.pexels.com/photos/207962/pexels-photo-207962.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
      />
      <div className="login-block">
        <NavLink to={'login'}>Login</NavLink>
      </div>
    </header>
  );
};
