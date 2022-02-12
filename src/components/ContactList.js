import { Link } from "react-router-dom";
import Contact from "./Contact";
import styles from "../components/form.module.css";
import { useState } from "react";
const ContactList = ({ contacts, setContacts, allContacts, onDelete }) => {
  const [searchItem, setSearchItem] = useState("");

  const searchHandler = (e) => {
    setSearchItem(e.target.value);
    const search = e.target.value;
    if (search !== "") {
      const filteredContacts = allContacts.filter((c) => {
        return Object.values(c)
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setContacts(filteredContacts);
    } else {
      setContacts(allContacts);
    }
  };
  return (
    <>
      <div className={styles.nav}>
        <h3>contacts</h3>
        <input
          type="text"
          className={styles.searchBar}
          value={searchItem}
          onChange={searchHandler}
        />
        <Link to="/add" className={styles.buttonAdd}>
          Add
        </Link>
      </div>
      {contacts.map((contact) => {
        return (
          <Contact onDelete={onDelete} contact={contact} key={contact.id} />
        );
      })}
    </>
  );
};

export default ContactList;
