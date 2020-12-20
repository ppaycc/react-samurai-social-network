import s from "./Dialog.module.css";
import React from 'react'
import ContactsContainer from "./Contacts/ContactsContainer";
import MessageContainer from "./Messeges/MessagesContainer";

const Dialog = (props) => {
  return (
    <div className={s.dialog}>
      <ContactsContainer />
      <MessageContainer />
    </div>
  );
};

export default Dialog;
