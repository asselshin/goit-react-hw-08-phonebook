import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { getContacts } from '../../redux/contacts/selectors';
import s from './Form.module.css';

export default function Form() {
  const dispatch = useDispatch();
  const contactsState = useSelector(getContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const newContact = form.elements.name.value;

    const hasRepeatedName = contactsState.find(
      contact => contact.name.toLowerCase() === newContact.toLowerCase()
    );

    if (hasRepeatedName) {
      alert(`${newContact} is already in contacts`);
      return;
    }

    dispatch(
      addContact({ name: newContact, number: form.elements.number.value })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={s.addBtn} type="submit">
        Add contact
      </button>
    </form>
  );
}
