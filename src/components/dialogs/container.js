import './index.css';
import {
  sendMessageCreator,
  updateNewMessageBodyCreator
} from '../../redux/dialogs-reducer';
import Dialogs from './index';
import { connect } from 'react-redux';
import { WithAuthRedirect } from '../../hoc/AuthRedirect';

const mapStateToProps = state => {
  return {
    dialogs: state.dialogsReducer.dialogs,
    messages: state.dialogsReducer.messages,
    newMessageBody: state.dialogsReducer.newMessageBody,
    isAuth: state.authReducer.isAuth
  };
};


const mapDispatchToProps = dispatch => {
  return {
    updateNewMessageBody: body => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    }
  };
};

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);

const AuthRedirectComponent = WithAuthRedirect(DialogsContainer);

export default AuthRedirectComponent;
