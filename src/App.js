import React from 'react';
import './App.css'
import {Header} from "./components/header";
import {LeftMenu} from "./components/left-page-menu";
import {ProfilePage} from "./components/profile-page";
import {Route} from 'react-router-dom'
import News from "./components/news";
import Music from "./components/music";
import Settings from "./components/settings";
import DialogsContainer from "./components/dialogs/container";
import UsersContainer from "./components/users/container";

const App = () => {

    return (

        <div className="app-wrapper">
            <Header/>
            <LeftMenu/>
            <div className='app-wrapper-content'>
                <Route render={() => <ProfilePage/>}
                       path='/profile'/>
                <Route render={() => <DialogsContainer/>}
                       path='/dialogs'/>
                <Route component={News} path='/news'/>
                <Route render={() => <UsersContainer/>} path='/users'/>
                <Route component={Music} path='/music'/>
                <Route component={Settings} path='/settings'/>
            </div>
        </div>

    )
};

export default App;
