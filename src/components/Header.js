import { nanoid } from 'nanoid';
import React from 'react';
import {useState} from 'react';

const initialValue = {id: nanoid(), title: "", completed: false};

function Header({toDoValues, toDoSet}) {
    
    const [form, setForm] = useState(initialValue);

    const inputChanged = (event) => {
        setForm({...form, title: event.target.value})
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (form.title === '') {
            return false;
        }
        toDoSet([...toDoValues, form]);
        setForm(initialValue);
    };

    return (
        <div>
            <header className="header">
                <h1>Yapılacaklar</h1>
                <form onSubmit={onSubmit}>
                    <input 
                    className="new-todo" 
                    placeholder="What needs to be done?" 
                    autoFocus 
                    value={form.title}
                    onChange={inputChanged}
                    />
                </form>
            </header>
        </div>
    )
}

export default Header;
