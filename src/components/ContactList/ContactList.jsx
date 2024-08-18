
import { selectFilteredContacts } from '../../redux/contactsSlice';
import { useSelector } from "react-redux";
import ContactListItem from "../ContactListItem/ContactListItem";
import css from "./ContactList.module.css";

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  
  return (
    <ul className={css.contactBox}>
      {contacts.length > 0 ? (
        contacts.map((contact) => (
          <ContactListItem key={contact.id} contact={contact} />
        ))
      ) : (
        <p>No contacts found</p>
      )}
    </ul>
  );
};

export default ContactList;
