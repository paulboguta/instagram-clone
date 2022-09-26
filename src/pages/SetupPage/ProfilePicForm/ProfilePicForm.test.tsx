/// <reference types="cypress" />

import { screen, render } from "@testing-library/react";
import { ProfilePicForm } from "./ProfilePicForm";

describe("test profile picture form", () => {
  test("renders profile pic form button", () => {
    render(<ProfilePicForm />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
