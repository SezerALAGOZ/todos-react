import React from 'react';
import ToDoList from './ToDoList';
import Footer from './Footer';

function Content({toDoList}) {
    return (
        <div>
            <ToDoList todos={toDoList} />
            <Footer />
        </div>
    )
}

export default Content;
