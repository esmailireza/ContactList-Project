import { Link } from "react-router-dom";
import Contact from "./Contact";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <>
      <Link to="/add">Form</Link>
      {contacts.map((contact) => {
        return <Contact onDelete={onDelete} contact={contact} />;
      })}
    </>
  );
};

export default ContactList;
