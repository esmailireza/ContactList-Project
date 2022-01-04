import styles from "./form.module.css";
const ContactList = ({ contacts }) => {
  //console.log(contacts);
  return (
    <>
      {contacts.map((contactItem) => {
        console.log(contactItem);
        console.log("contact:", contactItem.name);
        console.log("contact:", contactItem.email);
        console.log("id:", contactItem.id);
        return (
          <ul className={styles.ul}>
            <li key={contactItem.id}>
              <p>{contactItem.name}</p>
              <span>{contactItem.email}</span>
              <hr />
            </li>
          </ul>
        );
      })}
    </>
  );
};

export default ContactList;
