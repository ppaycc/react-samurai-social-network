import s from "./Contacts.module.css";
import ContactsItem from "./ContactsItem";

const Contacts = (props) => {
  let ContactItemArr = props.dialogItem.map((contact) => (
    <ContactsItem name={contact.name} id={contact.id} />
  ));

  return <div className={s.main}>{ContactItemArr}</div>;
};

export default Contacts;
