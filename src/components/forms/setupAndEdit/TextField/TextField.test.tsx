import { fireEvent, render, screen } from "@testing-library/react";
import { TextField } from "./TextField";

describe("test text field", () => {
  test("renders a text field", () => {
    const onChange = jest.fn();
    render(<TextField onChange={onChange} placeholder="username" value="2" />);
    const textField = screen.getByRole("input");
    expect(textField).toBeInTheDocument();
  });
  test("renders a text field with placeholder", () => {
    const onChange = jest.fn();
    render(<TextField onChange={onChange} placeholder="username" value="2" />);
    const textField = screen.getByPlaceholderText("username");
    expect(textField).toBeInTheDocument();
  });
  test("handles onChange", () => {
    const onChange = jest.fn();
    render(<TextField onChange={onChange} placeholder="username" value="2" />);
    const textField = screen.getByRole("input") as HTMLInputElement;
    fireEvent.change(textField, {
      target: { value: "Testing onChange" },
    });
    expect(textField.value).toBe("Testing onChange");
  });
});
