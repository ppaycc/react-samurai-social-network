import {connect} from "react-redux";
import Messeges from "./Messeges";
import {sendMessageActionCreator, updateDialogMessageActionCreator} from "../../../redux/dialogsPage-reducer";

const mapStateToProps = (state) => {
    return {
        dialogMessages: state.dialogPage.dialogMessages,
        newDialogMessage: state.dialogPage.newDialogMessage
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        },
        updateDialogMessage: (value) => {
            dispatch(updateDialogMessageActionCreator(value))
        }
    }
}

const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Messeges);

export default MessageContainer;