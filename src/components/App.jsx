import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { showError } from '../components/utils/notification';
import { ContactForm } from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import useLocalStorage from '../components/hooks/useLocalStorage';
import css from '../components/App.module.css';

const initPhoneBook = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', initPhoneBook);
  const [filter, setFilter] = useState('');

  const handleAddNewContact = newContact => {
    const matchName = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (matchName) {
      showError(`${newContact.name} is already in contacts`);
      return;
    }

    setContacts(prevState => [...prevState, newContact]);
  };

  const handleChangeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const handleDeleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onSubmit={handleAddNewContact} />

      <h2 className={css.title}>Contacts</h2>
      <div className={css.contact_list_container}>
        <Filter value={filter} onChange={handleChangeFilter} />
        <ContactList
          visibleContacts={getFilteredContacts()}
          onDeleteContact={handleDeleteContact}
        />
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
