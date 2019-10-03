import { applyMiddleware, combineReducers, createStore } from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import usersReducer from './user-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from './app-reducer';

const reducers = combineReducers({
  profileReducer,
  dialogsReducer,
  usersReducer,
  authReducer,
  app: appReducer,
  form: formReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
