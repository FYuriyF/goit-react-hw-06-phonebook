import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],

  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: contactData => {
        return {
          payload: {
            id: nanoid(),
            name: contactData.name,
            number: contactData.number,
          },
        };
      },
    },

    //   (state, action) => {
    //   const newContact = {
    //     id: nanoid(),
    //     name: action.payload.name,
    //     number: action.payload.number,
    //   };
    //   state.push(newContact);
    // },
    deleteContact: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
