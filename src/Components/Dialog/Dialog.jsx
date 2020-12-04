import ChatInput from "./ChatInput";
import Contacts from "./Contacts/Contacts";
import s from "./Dialog.module.css";
import Messeges from "./Messeges/Messeges";

const Dialog = (props) => {
  return (
    <div className={s.dialog}>
      <Contacts dialogItem={props.state.dialogItem} />
      <Messeges />
      {/* <div></div> */}
      {/* <ChatInput /> */}
    </div>
  );
};

export default Dialog;
