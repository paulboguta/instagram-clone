import { render, screen, fireEvent } from "@testing-library/react";
import { ButtonSignup } from "./ButtonSignup";

describe("test signup button", () => {
  test("signup button renders", () => {
    render(<ButtonSignup />);
    const button = screen.getByText("Sign in with Google");
    expect(button).toBeInTheDocument();
  });
  test("handles onclick", () => {
    const onClick = jest.fn();
    render(<ButtonSignup onClick={onClick} />);
    const button = screen.getByText("Sign in with Google");
    fireEvent.click(button);
    expect(onClick).toBeCalledTimes(1);
  });
});
