import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  const hadleFormSubmit = ({ name, number }) => {
    const addedToContacts = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (addedToContacts) {
      alert(`${name} is already in contacts!`);
      return;
    }

    setContacts(prev => [
      ...prev,
      { id: nanoid(), name: name, number: number },
    ]);
  };

  const handleFilterChange = e => setFilter(e.target.value);

  const handleContactDelete = id => {
    setContacts(prev => prev.filter(el => el.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm onSubmit={hadleFormSubmit} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onClick={handleContactDelete} />
    </>
  );
}
