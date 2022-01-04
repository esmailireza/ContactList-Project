import { useState } from "react/cjs/react.development";
import ContactForm from "./components/ContactForm";
import Header from "./components/Header";

function App() {
  const [contacts, setContacts] = useState([]);
  //todos?
  return (
    <>
      <Header />
      <ContactForm contacts={contacts} setContacts={setContacts} />
    </>
  );
}

export default App;
