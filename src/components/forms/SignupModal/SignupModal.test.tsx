import { render, screen } from "@testing-library/react";
import { SignupModal } from "./SignupModal";

describe("test signup modal", () => {
  test("signup modal renders", () => {
    render(<SignupModal />);
    const signupModal = screen.getByText("Sign In");
    expect(signupModal).toBeInTheDocument();
  });
  test("signup modal renders image", () => {
    render(<SignupModal />);
    const image = screen.getByAltText("instagram logo");
    expect(image).toBeInTheDocument();
  });
  test("signup modal renders 1 input field", () => {
    render(<SignupModal />);
    const input = screen.getByRole("input");
    expect(input).toBeInTheDocument();
  });
  test("signup modal renders 1 button", async () => {
    render(<SignupModal />);
    const buttons = await screen.findAllByRole("button");
    expect(buttons).toHaveLength(1);
  });
});
