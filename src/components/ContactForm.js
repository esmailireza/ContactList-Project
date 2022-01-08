import { useState } from "react";
import styles from "../components/form.module.css";
const ContactForm = ({ submitFormHandler }) => {
  const [contact, setContact] = useState({ name: "", email: "" });
  const submitContact = (e) => {
    if (!contact.name || !contact.email) {
      alert("all fildes are mandatory !");
      return;
    }

    e.preventDefault();
    submitFormHandler(contact);
    setContact({ name: "", email: "" });
  };

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  return (
    <main /* className={styles.main} */>
      <form className={styles.form} onSubmit={submitContact}>
        <h2>Add Contact</h2>
        <label htmlFor="input_name">Name</label>
        <input
          type="text"
          name="name"
          id="input_name"
          onChange={changeHandler}
          value={contact.name}
          placeholder="Name"
        />
        <label htmlFor="input_email">Email</label>
        <input
          type="email"
          name="email"
          id="input_email"
          onChange={changeHandler}
          value={contact.email}
          placeholder="Email"
        />
        <button type="submit" className={styles.btn}>
          Add
        </button>
      </form>
    </main>
  );
};

export default ContactForm;
