import { render, screen, fireEvent } from "@testing-library/react";

import { ButtonDmAdd } from "./ButtonDmAdd";
import { ButtonEditFollow } from "./ButtonEditFollow";
import { ButtonUnfollow } from "./ButtonUnfollow";
import { BiMessageSquareAdd } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";

describe("test profile buttons", () => {
  it("they handle onClick", () => {
    const onClick = jest.fn();
    render(<ButtonDmAdd element={<AiOutlinePlus />} />);
    render(<ButtonDmAdd element={<BiMessageSquareAdd />} />);
    render(<ButtonEditFollow text="Follow" onClick={onClick} />);
    render(<ButtonUnfollow text="Unfollow" onClick={onClick} />);
    const buttonUnfollow = screen.getByText("Unfollow");
    const buttonEditFollow = screen.getByText("Follow");
    fireEvent.click(buttonUnfollow);
    fireEvent.click(buttonEditFollow);
    expect(onClick).toHaveBeenCalledTimes(2);
  });
});
