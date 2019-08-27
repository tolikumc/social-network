import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/state'


export const rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={state} dispatch={store.dispatch.bind(store)}/>, document.getElementById('root'))
};


rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
