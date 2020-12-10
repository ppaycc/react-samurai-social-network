import s from "./ChatInput.module.css";
import React from 'react';



const ChatInput = (props) => {
  // console.log(props.state);
  let newMessageWrite = React.createRef();
  const changeWriteMessage = () => {
    let text = newMessageWrite.current.value;
    console.log(text);
    props.updataDialogMessages(text);
  }
  // console.log(props.newDialogMessage)
  return <textarea rows='3' className={s.main} value={props.newDialogMessage} onChange={changeWriteMessage} ref={newMessageWrite} placeholder='Type your message...'/>;
};

export default ChatInput;
