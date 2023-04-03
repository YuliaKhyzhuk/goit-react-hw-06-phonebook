import React from 'react';
import { GlobalStyle } from './GlobalStyle';
// import { nanoid } from 'nanoid';

// import { useState } from 'react';
// import { useLocalStorage } from 'hooks/useLocalStorage';

import Section from './Section/Section';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactsList from './ContactsList/ContactsList';


export function App () {
  // const testContacts = JSON.stringify([
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ]);
  // const [contacts, setContacts] = useLocalStorage('contacts', testContacts);
  // const [filter, setFilter] = useState(''); 

  // const formSubmitHandler = ({ name, number }) => {
  //   const existingContact = contacts.find(
  //     contact =>
  //       contact.name.toLowerCase() === name.toLowerCase ||
  //       contact.number === number
  //   );
  //   existingContact
  //     ? alert(`${name}, ${number} is already in contacts`)
  //     : setContacts(prevState => [...prevState, { name, number, id: nanoid() }],);

  //   console.log(contacts);
  // };

  // const deleteContactHandler = id => {
  //   setContacts(prevState => 
  //     prevState.filter(contact => contact.id !== id),
  //   );
  // };

  // const changeFilterHandler = event => {
  //   setFilter( event.currentTarget.value );
  // };


  // const getFilteredContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          fontSize: 16,
          color: '#010101',
        }}
      >
        <Section title="Phonebook">
          <Form />
        </Section>
        <Section title="Contacts">
          <Filter />
          <ContactsList />
        </Section>

        <GlobalStyle />
      </div>
    );
  }

  export default App;