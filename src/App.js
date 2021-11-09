import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  {
    /* initivalues are the values when app first rendered */
  }
  const initialValues = [
    {
      id: "",
      title: "Deneme 1",
      completed: false,
    },
    {
      id: "",
      title: "Deneme 2",
      completed: true,
    },
    {
      id: "",
      title: "Deneme 3",
      completed: false,
    },
  ];

  {
    /* Using useState hook to add initialValues to todos - setToDos will be used in Header component to set a new todo by getting its value from a form input field */
  }
  const [todos, setToDos] = useState(initialValues);

  {/* Sending filter for links all, active and complted in footer */}
  const [filter, setFilter] = useState("all");

  return (
    <section className="todoapp">

      {/* Sending initial todo values to Header component - Sending setToDos function to Header component to set a new todo  */}
      <Header toDoValues={todos} toDoSet={setToDos} />

      {/* Sending todo List to Content. After content, it will be sent to ToDolist component to display todos in a list */}
      <Content toDoList={todos} filter={filter} setFilter={setFilter} />

      <footer className="info">
        <p>Created by Sezer Alagöz</p>
      </footer>
    </section>
  );
}

export default App;
