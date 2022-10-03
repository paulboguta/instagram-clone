import { fireEvent, render, screen } from "@testing-library/react";
import { ButtonConfirm } from "./ButtonConfirm";

describe("test setups' button confirm", () => {
  it("renders a button", () => {
    render(<ButtonConfirm />);
    const button = screen.getByText("Confirm");
    expect(button).toBeInTheDocument();
  });
  it("handles on click events", () => {
    const onClick = jest.fn();
    render(<ButtonConfirm onClick={onClick} />);
    const button = screen.getByText("Confirm");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
