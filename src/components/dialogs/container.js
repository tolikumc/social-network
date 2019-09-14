import './index.css';
import { sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './index';
import { connect } from 'react-redux';
import { WithAuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';

const mapStateToProps = state => {
  return {
    dialogs: state.dialogsReducer.dialogs,
    messages: state.dialogsReducer.messages,
    newMessageBody: state.dialogsReducer.newMessageBody
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendMessage: message => {
      dispatch(sendMessageCreator(message));
    }
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  WithAuthRedirect
)(Dialogs);
