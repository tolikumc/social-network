import { combineReducers, createStore } from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import usersReducer from './user-reducer';
import authReducer from './auth-reducer';

const reducers = combineReducers({
  profileReducer,
  dialogsReducer,
  usersReducer,
  authReducer
});

const store = createStore(reducers);

export default store;
