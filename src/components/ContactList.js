import styles from "./form.module.css";
const ContactList = ({ name, email }) => {
  return (
    <ul className={styles.ul}>
      <li>
        <p>{name}</p>
        <span>{email}</span>
        <hr />
      </li>
    </ul>
  );
};

export default ContactList;
