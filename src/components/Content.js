import React from "react";
import ToDoList from "./ToDoList";
import Footer from "./Footer";

function Content({ toDoList, filter, setFilter, setToDos }) {
  return (
    <div>
     
      {/* Sending todo List to ToDolist component to display todos in a list */}
      <ToDoList todos={toDoList} setToDos={setToDos} />
      <Footer filter={filter} setFilter={setFilter}/>
    </div>
  );
}

export default Content;
