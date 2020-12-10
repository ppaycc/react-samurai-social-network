import Contacts from "./Contacts/Contacts";
import s from "./Dialog.module.css";
import Messeges from "./Messeges/Messeges";
import React from 'react'

const Dialog = (props) => {
    // console.log(props.state)
  return (
    <div className={s.dialog}>
      <Contacts dialogItem={props.state.dialogItem} />
      <Messeges state={props.state} updataDialogMessages={props.updataDialogMessages} sendNewMessage={props.sendNewMessage}/>
    </div>
  );
};

export default Dialog;
