import React from "react";

function ToDoList({ todos, setToDos }) {

{
    /*
    When a checkbox is clicked, onChecked function looks todos list and maps checked items' completed property to its opposite by looking if id's are the same
    */
}
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
    {/* Creates new todo list from changed checked state */}
    setToDos(newToDoListFromCheckedCompleted);
  }


  {/* Destroy buttons deletes items from list */}
  const destroy = (id) => {
    const destroyed = todos.filter(item => {
        return item.id !== id;
    })
    setToDos(destroyed);
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
                <button 
                className="destroy"
                onClick={() => destroy(item.id)}>                   
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default ToDoList;
