import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import state, {addPostToState} from './redux/state'


ReactDOM.render(<App state={state} addPostToState={addPostToState}/>, document.getElementById('root'));


