import React from 'react'
// import ChatInput from "../ChatInput";
// import InputMes from "./InOut/InputMes";
// import OutputMes from "./InOut/OutputMes";
import s from "./Messeges.module.css";
import MessagesItem from "./MessegesItem";
import ChatInput from "./ChatInput";
import store from "../../../redux/state";


const Messeges = (props) => {
    console.log(props)
    let sms = props.state.dialogMessages.map(el => {
      return  <MessagesItem id={el.id} who={el.who} time={el.time} value={el.value}/>
    });
    const sendMessage = () => {
        store.sendNewMessage();
    }
  return (
      <div>
        <div className={s.main}>
          {sms}
         </div>
          <div className={s.reletive}>
              <ChatInput updataDialogMessages={props.updataDialogMessages} newDialogMessage={props.state.newDialogMessage}/>
              <button className={s.button} onClick={sendMessage} ></button>
          </div>
      </div>
  );
};

export default Messeges;
