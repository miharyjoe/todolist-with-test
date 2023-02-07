import React from "react";

const TodoInput = ({ value, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input
      aria-label="Add Todo"
      type="text"
      required
      value={value}
      onChange={onChange}
    />
  </form>
);

export default TodoInput;
