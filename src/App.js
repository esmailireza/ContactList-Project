import { useState } from "react/cjs/react.development";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Header from "./components/Header";
function App() {
  const [contacts, setContacts] = useState([]);
  const deleteHandler = (id) => {
    /* console.log("deleted:", e.target); */
    console.log("id:", id);
    const filteredContact = contacts.filter((c) => c.id !== id);
    setContacts(filteredContact);
  };

  const editHandler = (id) => {
    /* console.log("deleted:", e.target); */
    console.log("id:", id);
    const filteredContact = contacts.filter((c) => c.id === id);
    console.log(filteredContact);
    console.log("Edited:", id);
    /* setContacts(filteredContact); */
  };
  return (
    <>
      <Header />
      <ContactForm
        contacts={contacts}
        setContacts={setContacts}
        onDelete={deleteHandler}
      />
      <ContactList
        contacts={contacts}
        onDelete={deleteHandler}
        onEdit={editHandler}
      />
    </>
  );
}

export default App;
