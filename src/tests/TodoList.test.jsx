import React from "react";
import { cleanup, render } from "@testing-library/react";
import TodoList from "../component/TodoList";

describe("TodoList  component", () => {
  it("snapshot: render todo list", () => {
    const todos = ["Todo 1", "Todo 2", "Todo 3"];
    const { container } = render(
      <TodoList todos={todos} handleCheck={onchange} />
    );
    expect(container).toMatchSnapshot();
  });

  it("renders a list of tasks", () => {
    const todos = ["Todo 1", "Todo 2", "Todo 3"];
    const { getByText } = render(
      <TodoList todos={todos} handleCheck={onchange} />
    );
    todos.forEach((todo) => {
      expect(getByText(todo)).toBeInTheDocument();
    });
  });
});
