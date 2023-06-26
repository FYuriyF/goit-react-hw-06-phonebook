import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addContact } from '../../store/contactsSlice';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (name.trim() === '' || number.trim() === '') {
      alert('Please enter name and number');
      return;
    }

    const newContact = {
      id: uuidv4(),
      name,
      number,
    };

    dispatch(addContact(newContact));

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label>
        Number
        <input
          type="text"
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
