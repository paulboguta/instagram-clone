/// <reference types="cypress" />

import { screen, render } from "@testing-library/react";
import { ProfilePicForm } from "./ProfilePicForm";

describe("test profile picture form", () => {
  test("renders profile pic form button", () => {
    const onClick = jest.fn();
    render(<ProfilePicForm onClickPic={onClick} profilepic="..." />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
