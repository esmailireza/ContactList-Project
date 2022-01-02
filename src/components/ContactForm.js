import { useState } from "react";
import styles from "../components/form.module.css";
const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const submitFormHandler = (e) => {
    e.preventDefault();
    //console.log("event:", e);
    console.log("name:", name);
    console.log("email:", email);
  };

  const nameHandler = (e) => {
    //console.log(e.target.value);
    setName(e.target.value);
  };
  const emailHandler = (e) => {
    //console.log(e.target.value);
    setEmail(e.target.value);
  };
  return (
    <main className={styles.main}>
      <form className={styles.form}>
        <h2>Add Contact</h2>
        <label for="input_name">Name</label>
        <input
          type="text"
          name="name"
          id="input_name"
          onChange={nameHandler}
          value={name}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          id="input_email"
          onChange={emailHandler}
          value={email}
        />
        <button className={styles.btn} onClick={submitFormHandler}>
          Add
        </button>
      </form>
    </main>
  );
};

export default ContactForm;
