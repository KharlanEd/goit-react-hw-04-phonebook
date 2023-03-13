
import { ListItem } from "./Listitem";



export function ContactList ({visibleContacts, onDeleteContact}){
   
    return (
      <ul >
        {visibleContacts.map(({ id, name, number }) => (
          <ListItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteItem={() => onDeleteContact(id)}
          />
        ))}
      </ul>
    )
  };

     

