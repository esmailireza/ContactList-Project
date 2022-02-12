import { useEffect, useState } from "react";
import styles from "../components/form.module.css";
import getOneContact from "../services/getOneContact";
const EditContact = ({ editFormHandler, history, match }) => {
  console.log(match);
  const [contact, setContact] = useState({ name: "", email: "" });
  const submitContact = (e) => {
    if (!contact.name || !contact.email) {
      alert("all fildes are mandatory !");
      return;
    }

    e.preventDefault();
    editFormHandler(contact, match.params.id);
    setContact({ name: "", email: "" });
    history.push("/");
  };

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const localFetch = async () => {
      try {
        const { data } = await getOneContact(match.params.id);
        setContact({ name: data.name, email: data.email });
      } catch (error) {}
    };
    localFetch();
  }, [match.params.id]);
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
          update Contact
        </button>
      </form>
    </main>
  );
};

export default EditContact;
