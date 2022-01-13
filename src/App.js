import { useState } from "react/cjs/react.development";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Header from "./components/Header";
import styles from "./components/form.module.css";
import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import ContactDetail from "./components/ContactDetail";
import getContacts from "./services/getContactsService";
import deleteOneContatc from "./services/deleteContactsService";
import addOneContact from "./services/addContactService";
import EditContact from "./components/EditContact";

function App() {
  const [contacts, setContacts] = useState([]);

  const submitFormHandler = async (contact) => {
    try {
      setContacts([
        ...contacts,
        { id: Math.floor(Math.random() * 100), ...contact },
      ]);
      await addOneContact(contact);
    } catch (error) {}
  };

  const editFormHandler = (contact) => {};

  const deleteContactHandler = async (id) => {
    try {
      await deleteOneContatc(id);
      const filteredComponent = contacts.filter((c) => c.id !== id);
      setContacts(filteredComponent);
    } catch (error) {}
  };

  // use to localStorage

  //1-getItem
  useEffect(() => {
    const fetchContacts = async () => {
      const { data } = await getContacts();
      setContacts(data);
    };
    try {
      fetchContacts();
    } catch (error) {}
  }, []);

  return (
    <div className={styles.main}>
      <Header />
      <Switch>
        <Route
          path="/edit/:id"
          render={(props) => (
            <EditContact editFormHandler={editFormHandler} {...props} />
          )}
        />
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
    </div>
  );
}

export default App;
