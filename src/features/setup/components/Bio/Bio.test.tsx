import { render, screen } from "@testing-library/react";
import { Bio } from "./Bio";

describe("test setup page bio", () => {
  test("bio renders", () => {
    const onChange = jest.fn();
    render(<Bio onChange={onChange} text="text" />);
    const textArea = screen.getByPlaceholderText("Your bio...");
    const paragraph = screen.getByText(
      "Bio has to be maximmum 120 characters."
    );
    expect(paragraph).toBeInTheDocument();
    expect(textArea).toBeInTheDocument();
  });
});
