import React from 'react';
import './App.css';
import { LeftMenu } from './components/left-page-menu';
import { Route } from 'react-router-dom';
import News from './components/news';
import Music from './components/music';
import Settings from './components/settings';
import DialogsContainer from './components/dialogs/container';
import UsersContainer from './components/users/container';
import ProfileContainer from './components/profile-page/container';
import HeaderContainer from './components/common/header/container';
import LoginPage from './components/login-page';

const App = () => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <LeftMenu />
      <div className="app-wrapper-content">
        <Route render={() => <ProfileContainer />} path="/profile/:userId?" />
        <Route render={() => <DialogsContainer />} path="/dialogs" />
        <Route component={News} path="/news" />
        <Route render={() => <UsersContainer />} path="/users" />
        <Route component={Music} path="/music" />
        <Route component={Settings} path="/settings" />
        <Route component={LoginPage} path="/login" />
      </div>
    </div>
  );
};

export default App;
