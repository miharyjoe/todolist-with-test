import React from "react";

const DoneList = ({ todos }) => (
  <ul className="liste">
    {todos.map((todo, index) => (
      <li key={index}>{todo}</li>
    ))}
  </ul>
);

export default DoneList;
