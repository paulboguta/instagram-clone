import { render, screen } from "@testing-library/react";
import { FormInput } from "./FormInput";

describe("test form input", () => {
  it("renders input and helper text", () => {
    const onChange = jest.fn();
    render(
      <FormInput
        onChange={onChange}
        value="test val"
        helperText="helper text..."
        helperErrorText="1"
        type="text"
      />
    );
    const input = screen.getByRole("input");
    const helper = screen.getByText("helper text...");
    expect(input).toBeInTheDocument();
    expect(helper).toBeInTheDocument();
  });
});
