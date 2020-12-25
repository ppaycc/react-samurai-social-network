import {connect} from "react-redux";
import Messeges from "./Messeges";
import {sendMessage, updateDialogMessage} from "../../../redux/dialogsPage-reducer";

const mapStateToProps = (state) => {
    return {
        dialogMessages: state.dialogPage.dialogMessages,
        newDialogMessage: state.dialogPage.newDialogMessage
    }
}


const MessageContainer = connect(mapStateToProps, {updateDialogMessage, sendMessage})(Messeges);

export default MessageContainer;