import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoInput from "../component/TodoInput";

describe("TodoInput", () => {
  it("renders the input field and submit", () => {
    const { getByLabelText } = render(
      <TodoInput value="" onChange={() => {}} onSubmit={() => {}} />
    );
    expect(getByLabelText("Add Todo")).toBeInTheDocument();
  });

  it("calls onChange when input value is changed", () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <TodoInput value="" onChange={onChange} onSubmit={() => {}} />
    );

    fireEvent.change(getByLabelText("Add Todo"), { target: { value: "Test" } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
