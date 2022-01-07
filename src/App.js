import { useState } from "react/cjs/react.development";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Header from "./components/Header";
function App() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

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

  const nameHandler = (e) => {
    setName({ name: e.target.value });
  };
  const emailHandler = (e) => {
    setEmail({ email: e.target.value });
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (!name) {
      alert("enter a name!");
    }
    if (!email) {
      alert("enter a email!");
    }
    setContacts([
      ...contacts,
      {
        id: Math.floor(Math.random() * 10),
        name: name.name,
        email: email.email,
      },
    ]);
    /* setName("");
    setEmail(""); */
  };

  return (
    <>
      <Header />
      <ContactForm
        contacts={contacts}
        onDelete={deleteHandler}
        submitFormHandler={submitFormHandler}
        nameHandler={nameHandler}
        emailHandler={emailHandler}
        name={name}
        email={email}
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
