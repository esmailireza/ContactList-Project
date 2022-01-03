import { useState } from "react";
import styles from "../components/form.module.css";
import ContactList from "./ContactList";

const ContactForm = () => {
  const [state, setState] = useState([]);
  //console.log(state);

  const submitFormHandler = (e) => {
    e.preventDefault();
    console.log(state);
    setState([...state, { name: state.name, email: state.email, id: 1 }]);
  };

  const nameHandler = (e) => {
    console.log(e.target.value);
    setState({ name: e.target.value });
  };
  const emailHandler = (e) => {
    console.log(e.target.value);
    setState({ email: e.target.value });
  };
  return (
    <main className={styles.main}>
      <form className={styles.form}>
        <h2>Add Contact</h2>
        <label htmlFor="input_name">Name</label>
        <input
          type="text"
          name="name"
          id="input_name"
          onChange={nameHandler}
          value={state.name}
        />
        <label htmlFor="input_email">Email</label>
        <input
          type="email"
          name="email"
          id="input_email"
          onChange={emailHandler}
          value={state.email}
        />
        <button className={styles.btn} onClick={submitFormHandler}>
          Add
        </button>
      </form>
      <ContactList
        /* submitFormHandler={submitFormHandler}
        setState={setState} */
        state={state}
      />
    </main>
  );
};

export default ContactForm;
