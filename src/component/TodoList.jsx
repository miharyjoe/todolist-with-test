import React from "react";

const TodoList = ({ todos, handleCheck }) => (
  <ul className="liste">
    {todos.map((todo, index) => (
      <li key={index}>
        <input
          type="checkbox"
          checked={false}
          onClick={() => handleCheck(index)}
        />
        <span>{todo}</span>
      </li>
    ))}
  </ul>
);

export default TodoList;
