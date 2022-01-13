import { FaTrashAlt, FaRegEdit } from "react-icons/fa";
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
          <div className={styles.btnGroup}>
            <Link to={`/edit/${id}`}>
              <button className={styles.btnDelete}>
                <FaRegEdit className={styles.iconEdit} />
              </button>
            </Link>
            <button className={styles.btnDelete} onClick={() => onDelete(id)}>
              <FaTrashAlt className={styles.iconDelete} />
            </button>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default Contact;
