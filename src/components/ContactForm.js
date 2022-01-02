import styles from "../components/form.module.css";
const ContactForm = () => {
  console.log(styles.form);
  return (
    <main className={styles.main}>
      <form className={styles.form}>
        <h2>Add Contact</h2>
        <label for="input_name">Name</label>
        <input type="text" name="name" id="input_name" />
        <label>Email</label>
        <input type="email" name="email" id="input_email" />
        <button className={styles.btn}>Add</button>
      </form>
    </main>
  );
};

export default ContactForm;
