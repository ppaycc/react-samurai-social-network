import s from "./ChatInput.module.css";
import React from 'react';


const ChatInput = (props) => {
  let newMessageWrite = React.createRef();
  const changeWriteMessage = () => {
    let text = newMessageWrite.current.value;
    props.dispatch({type: 'UPDATA-DIALOG-MESSAGES', newValue: text})
  }
  return <textarea rows='3' className={s.main} value={props.newDialogMessage} onChange={changeWriteMessage} ref={newMessageWrite} placeholder='Type your message...'/>;
};

export default ChatInput;
