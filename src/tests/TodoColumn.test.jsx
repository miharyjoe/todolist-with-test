import React from "react";
import { render } from "@testing-library/react";
import TodoColumn from "../component/TodoColumn";

describe("TodoColumn component", () => {
  test("renders title and todo list or done list", () => {
    const todos = ["todo1", "todo2", "todo3"];
    const done = ["done1", "done2"]
    const handleCheck = jest.fn();
    const { getByText } = render(
      <TodoColumn title="Todo" todos={todos} handleCheck={handleCheck} />
    );

    expect(getByText("Todo")).toBeInTheDocument();
    expect(getByText("todo1")).toBeInTheDocument();
    expect(getByText("todo2")).toBeInTheDocument();
    expect(getByText("todo3")).toBeInTheDocument();

    const { rerender } = render(
      <TodoColumn title="Done" todos={done} handleCheck={handleCheck} />
    );

    expect(getByText("Done")).toBeInTheDocument();
    expect(getByText("done1")).toBeInTheDocument();
    expect(getByText("done2")).toBeInTheDocument();

  });
});
