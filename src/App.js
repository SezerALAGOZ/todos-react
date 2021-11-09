import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import {useState} from 'react';

function App() {

  const initialValues = [
    {
      id: "",
      title: "Deneme 1",
      completed: false
    },
    {
      id: "",
      title: "Deneme 2",
      completed: true
    },
    {
      id: "",
      title: "Deneme 3",
      completed: false
    },
  ];

  const [todos, setToDos] = useState(initialValues);

  return (
    <section className="todoapp">

      <Header toDoValues={todos} toDoSet={setToDos}/>

      <Content toDoList={todos}/>

      <footer className="info">
        <p>Created by Sezer Alagöz</p>
      </footer>

    </section>
  );
}

export default App;
