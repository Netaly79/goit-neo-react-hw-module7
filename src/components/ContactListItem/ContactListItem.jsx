import { HiUser } from "react-icons/hi";
import { BsTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps.js";
import css from "./ContactListItem.module.css";

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <li className={css.contact}>
      <div className={css.contactInfo}>
        <p>
          <HiUser className={css.iconUser} size="16" /> {contact.name}
        </p>
        <p>
          <BsTelephoneFill className={css.iconTel} size="16" /> {contact.number}
        </p>
      </div>
      <button
        className={css.button}
        onClick={() => handleRemoveItem(contact.id)}>
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;
