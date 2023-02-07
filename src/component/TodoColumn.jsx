import React from "react";
import TodoList from "./TodoList";
import DoneList from "./DoneList";

const TodoColumn = ({ title, todos, handleCheck }) => (
  <div>
    <div className="title">
      <h3>{title}</h3>
    </div>
    <div className="scroll">
      {title == "Todo" ? (
        <TodoList todos={todos} handleCheck={handleCheck} />
      ) : (
        <DoneList todos={todos} />
      )}
    </div>
  </div>
);

export default TodoColumn;
