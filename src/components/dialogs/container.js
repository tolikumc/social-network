import './index.css';
import {
  sendMessageCreator,
  updateNewMessageBodyCreator
} from '../../redux/dialogs-reducer';
import Dialogs from './index';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { state };
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

export default DialogsContainer;
