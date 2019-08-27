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
    console.log(props);

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <LeftMenu/>
                <div className='app-wrapper-content'>
                    <Route render={() => <ProfilePage posts={props.state.profilePage.posts}
                                                      dispatch={props.dispatch}/>}
                           path='/profile'/>
                    <Route render={() => <Dialogs store={props.store} state={props.state}/>} path='/dialogs'/>
                    <Route component={News} path='/news'/>
                    <Route component={Music} path='/music'/>
                    <Route component={Settings} path='/settings'/>
                </div>

            </div>
        </BrowserRouter>
    )
};

export default App;
