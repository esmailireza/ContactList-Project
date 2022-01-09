import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./form.module.css";

const Contact = ({ onDelete, contact }) => {
  const { name, email, id } = contact;

  return (
    <ul className={styles.ul} key={id}>
      <li>
        <div>
          <Link to={{ pathname: `user/${id}`, state: { contact: contact } }}>
            <p>{name}</p>
            <span>{email}</span>
          </Link>
        </div>
        <div>
          <button onClick={() => onDelete(id)}>
            <FaTrashAlt className={styles.icon} />
          </button>
        </div>
      </li>
    </ul>
  );
};

export default Contact;
