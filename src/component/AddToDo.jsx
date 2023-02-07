import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoColumn from "./TodoColumn";

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
      <TodoInput
        value={newTodo}
        onChange={updateInputVal}
        onSubmit={handleSubmit}
      />
      <div className="todo-lists">
        <div className="todo-column">
          <TodoColumn title="Todo" todos={todos} handleCheck={handleCheck} />
        </div>
        <div className="done-column">
          <TodoColumn title="Done" todos={done} />
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
