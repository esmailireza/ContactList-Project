import { Link } from "react-router-dom";
import Contact from "./Contact";
import styles from "../components/form.module.css";
console.log(styles);
const ContactList = ({ contacts, onDelete }) => {
  return (
    <>
      <div className={styles.nav}>
        <h3>contacts</h3>
        <Link to="/add" className={styles.buttonAdd}>
          Add
        </Link>
      </div>
      {contacts.map((contact) => {
        return <Contact onDelete={onDelete} contact={contact} />;
      })}
    </>
  );
};

export default ContactList;
