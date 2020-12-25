import React from 'react'
import s from "./Messeges.module.css";
import MessagesItem from "./MessegesItem";
import ChatInput from "./ChatInput";

const Messeges = (props) => {
    let sms = props.dialogMessages.map(el => {
      return  <MessagesItem id={el.id} who={el.who} time={el.time} value={el.value}/>
    });
    // const sendMessage = () => {
    //     props.dispatch(sendMessageActionCreator());
    // }
  return (
      <div>
        <div className={s.main}>
          {sms}
         </div>
          <div className={s.reletive}>
              <ChatInput updateDialogMessage={props.updateDialogMessage} newDialogMessage={props.newDialogMessage}/>
              <button className={s.button} onClick={props.sendMessage} />
          </div>
      </div>
  );
};

export default Messeges;
