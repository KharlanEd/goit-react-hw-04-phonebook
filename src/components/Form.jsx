import { useState} from "react";
import css from './Phonebook.module.css'


export function ContactForm ({onSubmit}) {
  
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');


    

    
    const handleChang = e => {
        const { name, value } = e.currentTarget;

        switch (name) {
            case 'name':
                setName(value);
                break;

            case 'number':
                setNumber(value);
                break;

            default:
                return;
        }
    }  
    
  const  handleSubmit = e => {
        e.preventDefault() 
        onSubmit({name,number})  
        
    }

 

    
        return (
            <form
                className={css.container}
                onSubmit={handleSubmit}
            >
                <label className={css.label} >
                    Name
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"

                        value={name}
                        onChange ={handleChang}
                    
                     />
                </label>
                <label className={css.label} >
                    Number
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"

                        value={number}

                        onChange ={handleChang}
                    />
                </label>
                <button className={css.btn} type="submit">Add contact</button>
        </form>) 
      
    }
