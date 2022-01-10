import { useState } from "react/cjs/react.development";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Header from "./components/Header";
import styles from "./components/form.module.css";
import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import ContactDetail from "./components/ContactDetail";
import axios from "axios";
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

  // use to localStorage

  //1-getItem
  useEffect(() => {
    //const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    //if (savedContacts) setContacts(savedContacts);
    const getContacts = async () => {
      const { data } = await axios.get("http://localhost:3001/contacts");
      setContacts(data);
    };
    getContacts();
  }, []);
  //2-setItem
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={styles.main}>
      <Header />
      <Switch>
        <Route path="/user/:id" component={ContactDetail} />
        <Route
          path="/add"
          render={(props) => (
            <ContactForm submitFormHandler={submitFormHandler} {...props} />
          )}
        />
        <Route
          path="/"
          exact
          render={(props) => (
            <ContactList
              contacts={contacts}
              onDelete={deleteContactHandler}
              {...props}
            />
          )}
        />
      </Switch>
      {/* <ContactForm submitFormHandler={submitFormHandler} />
      <ContactList contacts={contacts} onDelete={deleteContactHandler} /> */}
    </div>
  );
}

export default App;
