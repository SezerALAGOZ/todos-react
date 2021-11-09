import React from "react";

function ToDoList({ todos, setToDos }) {

  const onChecked = (id) => {
    const newToDoListFromCheckedCompleted = todos.map(item => {
        if (item.id === id) {
            item.completed = !item.completed;
            return item;
        }
        else {
            return item;
        }
    });
    setToDos(newToDoListFromCheckedCompleted);
  }

  return (
    <div>
      <section className="main">
          
        <ul className="todo-list">
          {/* Mapping todos into an ul element */}
          {todos.map((item, index) => (
            <li key={index} className={item.completed ? "completed" : ""}>
              <div className="view">
                <input 
                className="toggle" 
                type="checkbox"
                onClick={() => onChecked(item.id)}
                />
                <label>{item.title}</label>
                <button className="destroy"></button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default ToDoList;
