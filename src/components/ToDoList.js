import React from "react";

function ToDoList({ todos }) {
  return (
    <div>
      <section className="main">
          
        <ul className="todo-list">

          {/* Mapping todos into an ul element */}
          {todos.map((item, index) => (
            <li key={index} className={item.completed}>
              <div className="view">
                <input className="toggle" type="checkbox" />
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
