import styles from "./form.module.css";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <>
      <Link to="/add">Form</Link>
      {contacts.map((contact) => {
        const { name, email, id } = contact;
        return (
          <ul className={styles.ul} key={id}>
            <li>
              <div>
                <p>{name}</p>
                <span>{email}</span>
              </div>
              <div>
                <button onClick={() => onDelete(id)}>
                  <FaTrashAlt className={styles.icon} />
                </button>
              </div>
            </li>
          </ul>
        );
      })}
    </>
  );
};

export default ContactList;
