import React from 'react'

function Footer({filter, setFilter}) {
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
                    <a className={filter === 'all' ? 'selected': ''} onClick={() => setFilter('all')}>All</a>
                </li>
                <li>
                    <a className={filter === 'active' ? 'selected': ''} onClick={() => setFilter('active')}>Active</a>
                </li>
                <li>
                    <a className={filter === 'completed' ? 'selected': ''} onClick={() => setFilter('completed')}>Completed</a>
                </li>
            </ul>

            <button className="clear-completed">
                Clear completed
            </button>
            </footer>
        </div>
    )
}

export default Footer;
