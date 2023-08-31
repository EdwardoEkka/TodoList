import React, { useState } from 'react';
import TodoItem from './TodoItem';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { task: newTodo, time: '' }]);
      setNewTodo('');
    }
  };

  const handleRemoveTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleSetTime = (index, time) => {
    const updatedTodos = [...todos];
    updatedTodos[index].time = time;
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1 className="title">To-Do List</h1>
      <div className="input-container">
        <input
          className="todo-input"
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task"
        />
        <button className="add-button" onClick={handleAddTodo}>
          Add
        </button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo.task}
            time={todo.time}
            onRemove={() => handleRemoveTodo(index)}
            onSetTime={(time) => handleSetTime(index, time)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
