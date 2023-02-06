import React, { useState } from "react";

const AddTodo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [done, setDone] = useState([]);

  const handleCheck = (index) => {
    setDone([...done, todos[index]]);
    setTodos(todos.filter((todo, i) => i !== index));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };
  const updateInputVal = (e) => setNewTodo(e.target.value);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          aria-label="Add Todo"
          type="text"
          required
          value={newTodo}
          onChange={updateInputVal}
        />
      </form>
      <div className="todo-lists">
        <div className="todo-column">
          <div className="title">
            <h3>Todo</h3>
          </div>
          <div className="scroll">
            <ul className="liste">
              {todos.map((todo, index) => (
                <li key={index}>
                  <input
                    type="checkbox"
                    aria-checked="false"
                    onClick={() => handleCheck(index)}
                  />
                  <span>{todo}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="done-column">
          <div className="title">
            <h3>Done</h3>
          </div>
          <div className="scroll">
            <ul className="liste">
              {done.map((todo, index) => (
                <li key={index}>
                  <span>{todo}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
