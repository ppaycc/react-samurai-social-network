import React from 'react'
import s from "./Messeges.module.css";
import MessagesItem from "./MessegesItem";
import ChatInput from "./ChatInput";


const Messeges = (props) => {
    let sms = props.state.dialogMessages.map(el => {
      return  <MessagesItem id={el.id} who={el.who} time={el.time} value={el.value}/>
    });
    const sendMessage = () => {
        props.dispatch({type: 'SEND-MESSAGE'})
    }
  return (
      <div>
        <div className={s.main}>
          {sms}
         </div>
          <div className={s.reletive}>
              <ChatInput dispatch={props.dispatch} newDialogMessage={props.state.newDialogMessage}/>
              <button className={s.button} onClick={sendMessage} />
          </div>
      </div>
  );
};

export default Messeges;
