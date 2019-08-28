import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/redux-store'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


const rerenderEntireTree = () => {
    ReactDOM.render(<Provider store={store}>
            <BrowserRouter>

                <App/>
            </BrowserRouter>
        </Provider>,
        document.getElementById('root')
    )
};


rerenderEntireTree();

store.subscribe(() => {

    rerenderEntireTree()
});
