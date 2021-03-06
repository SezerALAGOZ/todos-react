import React from 'react'

function Footer({filter, setFilter, todos, setToDos}) {

    const clearCompleted = () => {
        const cleared = todos.filter(item => {
            return item.completed === false;
        });
        setToDos(cleared);
    }

    return (
        <div>
            <footer className="footer">

            <span className="todo-count">
                <strong>2</strong>
                items left
            </span>

            {/* When all, active, completed links are clicked, their styles will be rendered accordingly */}
            <ul className="filters">
                <li>
                    <button className={filter === 'all' ? 'selected': ''} onClick={() => setFilter('all')}>All</button>
                </li>
                <li>
                    <button className={filter === 'active' ? 'selected': ''} onClick={() => setFilter('active')}>Active</button>
                </li>
                <li>
                    <button className={filter === 'completed' ? 'selected': ''} onClick={() => setFilter('completed')}>Completed</button>
                </li>
            </ul>

            <button 
            onClick={clearCompleted}
            className="clear-completed">
                Clear completed
            </button>
            </footer>
        </div>
    )
}

export default Footer;
