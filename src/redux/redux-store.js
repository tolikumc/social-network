import { applyMiddleware, combineReducers, createStore } from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import usersReducer from './user-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
  profileReducer,
  dialogsReducer,
  usersReducer,
  authReducer,
  form: formReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
