import Contacts from "./Contacts/Contacts";
import s from "./Dialog.module.css";
import Messeges from "./Messeges/Messeges";
import React from 'react'

const Dialog = (props) => {
  return (
    <div className={s.dialog}>
      <Contacts dialogItem={props.state.dialogItem} />
      <Messeges state={props.state} dispatch={props.dispatch}/>
    </div>
  );
};

export default Dialog;
