import styles from "./form.module.css";
const ContactList = ({ state }) => {
  return (
    <>
      {state.map((co) => {
        console.log(co);
        console.log("contact:", co.name);
        return (
          <ul className={styles.ul}>
            <li key={co.id}>
              <p>{co.name}</p>
              <span>{co.email}</span>
              <hr />
            </li>
          </ul>
        );
      })}
    </>
  );
};

export default ContactList;
