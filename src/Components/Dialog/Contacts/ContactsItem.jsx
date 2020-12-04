import { NavLink } from "react-router-dom";
import s from "./ContactsItem.module.css";

const ContactsItem = (props) => {
  return (
    <NavLink
      to={"/dialog/" + props.id}
      className={s.main}
      activeClassName={s.active}
    >
      <div className={s.ava}></div>
      <div className={s.userInf}>
        <h4>{props.name}</h4>
        <p>Привет, как дела? дела как твои йоу але привет сука блять</p>
      </div>
    </NavLink>
  );
};

export default ContactsItem;
