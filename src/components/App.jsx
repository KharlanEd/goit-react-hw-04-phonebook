import {useState,useEffect} from "react";
import { ContactList } from "./ContactList";
import { Filter } from "./Filter";
import { ContactForm } from "./Form";
import css from './Phonebook.module.css'
import { nanoid } from 'nanoid'


const CONTACTS_KEY = 'contacts';

export function App() {
  const parsContacts = JSON.parse(localStorage.getItem(CONTACTS_KEY));
 const [contacts, setContacts] = useState(
    () =>
      parsContacts ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        { id: 'id-5', name: 'Ihor Kalyta', number: '577-99-77' },
      ]
  );
  const [filter, setFilter] = useState('');
  useEffect(() => {
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
  }, [contacts]);
  
 

const  handleFilterChange = event => {
    setFilter(event.currentTarget.value) 
  };

 const findName = (name) => {
    
    const normalizedName = name.toLowerCase();

    return contacts.find(
      contact => contact.name.toLowerCase() === normalizedName,
    );
  };

 const formSubmit = ({ name, number }) => {
    const checkContact = findName(name);

    if (checkContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    const contact = {
      id:nanoid(),
      name,
      number,
    };

   return setContacts(prevState => [contact, ...prevState]);
  };

 const deleteContact = contactId =>{
       setContacts(contacts.filter(contact => contact.id !== contactId))
    }
  

 const getVisibleContacts =  contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()))
    
  
  

  

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <div>
      <h1 className={css.title}>Phonebook</h1>
        <ContactForm onSubmit={formSubmit } />
      
        <h2 className={css.title}>Contacts</h2>
        <Filter onChange={handleFilterChange} value={filter}/>
        <ContactList
          visibleContacts={getVisibleContacts}
          onDeleteContact={deleteContact}/>
        
      </div>  
    </div>
  )
}
