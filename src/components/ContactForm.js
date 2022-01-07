import styles from "../components/form.module.css";

const ContactForm = ({
  emailHandler,
  nameHandler,
  submitFormHandler,
  name,
  email,
}) => {
  console.log(name.name);
  console.log(email.email);
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
          value={name.name}
          placeholder="Name"
        />
        <label htmlFor="input_email">Email</label>
        <input
          type="email"
          name="email"
          id="input_email"
          onChange={emailHandler}
          value={email.email}
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
