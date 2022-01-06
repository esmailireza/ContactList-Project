import { useState } from "react";
import ContactForm from "./ContactForm";
import styles from "./form.module.css";
const ContactList = ({ contacts, onDelete }) => {
  //console.log(contacts);
  const [edit, setEdit] = useState({ id: null, text: "" });
  const renderContacts = () => {
    return contacts.map((contactItem) => {
      return (
        <ul className={styles.ul}>
          <li key={contactItem.id}>
            <div>
              <p>{contactItem.name}</p>
              <span>{contactItem.email}</span>
            </div>
            <div>
              <button onClick={() => setEdit(contactItem)}>edit</button>
              <button onClick={() => onDelete(contactItem.id)}>delete</button>
            </div>
          </li>
        </ul>
      );
    });
  };
  return <div>{edit.id ? <ContactForm /> : renderContacts()}</div>;
};

export default ContactList;
