import { nanoid } from "nanoid";
import React from "react";
import { useState } from "react";

{
  /* initial value is the empty state the form field as an object reflecting the todo object from App.js */
}
const initialValue = { id: nanoid(), title: "", completed: false };

function Header({ toDoValues, toDoSet }) {
  {
    /* Setting form field to its initial state */
  }
  const [form, setForm] = useState(initialValue);

  {
    /* On input change, updating form as an object only replacing the title property */
  }
  const inputChanged = (event) => {
    setForm({ ...form, title: event.target.value });
  };

  {
    /* On submit, adding new todo object from form field to the list of todos. This updates todo list. Then setting form field to its initial state */
  }
  const onSubmit = (event) => {
    event.preventDefault();
    if (form.title === "") {
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
  );
}

export default Header;
