import styles from "./form.module.css";
const ContactList = ({ contacts, onDelete }) => {
  //console.log(contacts);

  return (
    <>
      {contacts.map((contactItem) => {
        /* console.log(contactItem);
        console.log("contact:", contactItem.name);
        console.log("contact:", contactItem.email);
        console.log("id:", contactItem.id); */
        return (
          <ul className={styles.ul}>
            <li key={contactItem.id}>
              <div>
                <p>{contactItem.name}</p>
                <span>{contactItem.email}</span>
              </div>
              <div>
                <button onClick={() => onDelete(contactItem.id)}>delete</button>
              </div>
              {/* <hr /> */}
            </li>
          </ul>
        );
      })}
    </>
  );
};

export default ContactList;
