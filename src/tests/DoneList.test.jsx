import React from "react";
import { render } from "@testing-library/react";
import DoneList from "../component/DoneList";

describe("DoneList", () => {
  it("snapshot: renders done task", () => {
    const todos = ["Todo 1", "Todo 2", "Todo 3"];
    const { container } = render(<DoneList todos={todos} />);
    expect(container).toMatchSnapshot();
  });

  it("renders a list of done task", () => {
    const todos = ["Todo 1", "Todo 2", "Todo 3"];
    const { getByText } = render(<DoneList todos={todos} />);
    todos.forEach((todo) => {
      expect(getByText(todo)).toBeInTheDocument();
    });
  });
});
