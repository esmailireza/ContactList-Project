import { useState } from "react/cjs/react.development";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Header from "./components/Header";
import styles from "./components/form.module.css";
function App() {
  const [contacts, setContacts] = useState([]);

  const submitFormHandler = (contact) => {
    setContacts([
      ...contacts,
      { id: Math.floor(Math.random() * 100), ...contact },
    ]);
  };

  const deleteContactHandler = (id) => {
    const filteredComponent = contacts.filter((c) => c.id !== id);
    setContacts(filteredComponent);
  };

  return (
    <div className={styles.main}>
      <Header />
      <ContactForm submitFormHandler={submitFormHandler} />
      <ContactList contacts={contacts} onDelete={deleteContactHandler} />
    </div>
  );
}

export default App;
