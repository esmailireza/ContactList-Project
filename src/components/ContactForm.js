import { useState } from "react";
import styles from "../components/form.module.css";
import ContactList from "./ContactList";

const ContactForm = ({ contacts, setContacts }) => {
  //const [state, setState] = useState([]);
  //const [input, setInput] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  //console.log(state);

  const submitFormHandler = (e) => {
    e.preventDefault();
    //console.log(state);
    setContacts([
      ...contacts,
      {
        id: Math.floor(Math.random() * 10),
        name: name.name,
        email: email.email,
      },
    ]);
    /* setEmail("");
    setName(""); */
  };

  const nameHandler = (e) => {
    //console.log(e.target.value);
    setName({ name: e.target.value });
  };
  const emailHandler = (e) => {
    //console.log(e.target.value);
    setEmail({ email: e.target.value });
  };
  //console.log(name);
  //console.log(email);
  //console.log(contacts);
  return (
    <main className={styles.main}>
      <form className={styles.form} onSubmit={submitFormHandler}>
        <h2>Add Contact</h2>
        <label htmlFor="input_name">Name</label>
        <input
          type="text"
          name="name"
          id="input_name"
          onChange={nameHandler}
          value={contacts.name}
          //?
        />
        <label htmlFor="input_email">Email</label>
        <input
          type="email"
          name="email"
          id="input_email"
          onChange={emailHandler}
          value={contacts.email}
          //?
        />
        <button type="submit" className={styles.btn}>
          Add
        </button>
      </form>
      <ContactList contacts={contacts} />
    </main>
  );
};

export default ContactForm;
