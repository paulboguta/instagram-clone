import { fireEvent, render, screen } from "@testing-library/react";
import { TextField } from "./TextField";

describe("test text field", () => {
  test("renders a text field", () => {
    render(<TextField />);
    const textField = screen.getByRole("input");
    expect(textField).toBeInTheDocument();
  });
  test("renders a text field with placeholder", () => {
    render(<TextField placeholder="username" />);
    const textField = screen.getByPlaceholderText("username");
    expect(textField).toBeInTheDocument();
  });
  test("handles onChange", () => {
    const onChange = jest.fn();
    render(<TextField onChange={onChange} />);
    const textField = screen.getByRole("input") as HTMLInputElement;
    fireEvent.change(textField, {
      target: { value: "Testing onChange" },
    });
    expect(textField.value).toBe("Testing onChange");
  });
});
