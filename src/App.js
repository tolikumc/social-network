import React from 'react';
import './App.css'
import {Header} from "./components/header";
import {LeftMenu} from "./components/left-page-menu";
import {ProfilePage} from "./components/profile-page";
import Dialogs from "./components/dialogs";
import {Route, BrowserRouter} from 'react-router-dom'
import News from "./components/news";
import Music from "./components/music";
import Settings from "./components/settings";

const App = (props) => {


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <LeftMenu/>
                <div className='app-wrapper-content'>
                    <Route render={() => <ProfilePage posts={props.state.profilePage.posts}
                                                      addPostToState={props.addPostToState}/>}
                           path='/profile'/>
                    <Route render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs}
                                                  messages={props.state.dialogsPage.messages}/>} path='/dialogs'/>
                    <Route component={News} path='/news'/>
                    <Route component={Music} path='/music'/>
                    <Route component={Settings} path='/settings'/>
                </div>

            </div>
        </BrowserRouter>
    )
};

export default App;
