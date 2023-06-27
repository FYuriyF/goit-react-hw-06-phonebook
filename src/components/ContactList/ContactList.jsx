import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../store/contactsSlice';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <li key={contact.id} className={css.item}>
          {contact.name}: {contact.number}
          <button onClick={() => handleDelete(contact.id)} className={css.btn}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
