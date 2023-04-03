import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

// const contactsInitialState = {
//     items: [],
// }

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  },
  reducers: {
    addContact(state, action) {
      console.log('Slice addContact state:', state);
      console.log('Slice addContact action:', action);
      console.log('Slice addContact action:', action.payload);


      state.items = [...state.items, ...action.payload];
    },

    deleteContact(state, action) {
      console.log('Slice deleteContact state:', state);
      console.log('Slice deleteContact action:', action);

      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});


export const { addContact, deleteContact } = contactsSlice.actions;

const persistConfig = {
    key: 'contacts',
    storage,
};

export const contactsReducer = persistReducer(
    persistConfig,
    contactsSlice.reducer
);