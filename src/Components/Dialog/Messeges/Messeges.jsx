import ChatInput from "../ChatInput";
import InputMes from "./InOut/InputMes";
import OutputMes from "./InOut/OutputMes";
import s from "./Messeges.module.css";

const Messeges = () => {
  return (
    <div className={s.main}>
      <OutputMes />
      <InputMes />
      <OutputMes />
      <InputMes />
    </div>
  );
};

export default Messeges;
