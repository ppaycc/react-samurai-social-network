import {connect} from "react-redux";
import Contacts from "./Contacts";

const mapStateToProps = (state) => {
    return {
        dialogItem: state.dialogPage.dialogItem
    }
}

const mapDispatchToProps =(dispatch) => {
    return {

    }
}

const ContactsContainer = connect(mapStateToProps, mapDispatchToProps)(Contacts);

export default ContactsContainer;