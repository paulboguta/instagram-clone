import { render, screen, fireEvent } from "@testing-library/react";

import { ButtonDmAdd } from "./ButtonDmAdd";
import { ButtonEditFollow } from "./ButtonEditFollow";
import { ButtonUnfollow } from "./ButtonUnfollow";
import { BiMessageSquareAdd } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";

describe("test profile buttons", () => {
  it("they handle onClick", () => {
    render(<ButtonDmAdd element={<AiOutlinePlus />} />);
    render(<ButtonDmAdd element={<BiMessageSquareAdd />} />);
    render(<ButtonEditFollow text="Follow" />);
    render(<ButtonUnfollow text="Unfollow" />);
    const onClick = jest.fn();
    const buttonUnfollow = screen.getByText("Unfollow");
    const buttonEditFollow = screen.getByText("Follow");
    fireEvent.click(buttonUnfollow);
    fireEvent.click(buttonEditFollow);
    expect(onClick).toHaveBeenCalledTimes(0);
  });
});
