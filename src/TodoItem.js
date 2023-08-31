import React, { useState } from 'react';
import './TodoItem.css';

function TodoItem({ todo, index, onRemove }) {
    const [time, setTime] = useState('');

    return (
        <li className="todo-item">
            <div className="todo-content">
                <span className="todo-text">Task: {todo.toUpperCase()}</span>
                <span>Set Time: <input
                    className="time-input"
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                /></span>

            </div>

            <div className="actions">
                <button className="remove-button" onClick={() => onRemove(index)}>
                    Remove
                </button>
            </div>
        </li>
    );
}

export default TodoItem;
