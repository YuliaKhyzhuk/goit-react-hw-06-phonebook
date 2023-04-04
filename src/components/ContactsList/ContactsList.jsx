import React from 'react';
// import PropTypes from 'prop-types';
import {
  DeleteContactButton,
  ContactsContainer,
  ContactsData,
} from './ContactsList.styled';

import { getContacts, getFilter } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filterQuery = useSelector(getFilter);
  const normalizedFilter = filterQuery.toLowerCase();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ContactsContainer>
      {filteredContacts.map(({ name, number, id }) => (
        <ContactsData key={id}>
          {name}: {number}
          <DeleteContactButton
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </DeleteContactButton>
        </ContactsData>
      ))}
    </ContactsContainer>
  );
};

// ContactsList.propTypes = {
//   contacts: PropTypes.arrayOf(PropTypes.shape({ contact: PropTypes.object }))
//     .isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };

export default ContactsList;
