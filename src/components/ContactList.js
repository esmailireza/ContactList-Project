import { useState } from "react";
import ContactForm from "./ContactForm";
import styles from "./form.module.css";
const ContactList = ({ contacts, onDelete }) => {
  //console.log(contacts);
  const [edit, setEdit] = useState({ id: null, name: "", email: "" });
  const renderContacts = () => {
    return contacts.map((contactItem) => {
      console.log(edit);
      return (
        <ul className={styles.ul} key={contactItem.id}>
          <li>
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
  console.log(edit.id);
  return <div>{edit.id ? <ContactForm /> : renderContacts()}</div>;
};

export default ContactList;
