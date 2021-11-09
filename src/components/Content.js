import React from "react";
import ToDoList from "./ToDoList";
import Footer from "./Footer";

function Content({ toDoList }) {
  return (
    <div>
     
      {/* Sending todo List to ToDolist component to display todos in a list */}
      <ToDoList todos={toDoList} />
      <Footer />
    </div>
  );
}

export default Content;
