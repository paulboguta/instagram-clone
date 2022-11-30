import { fireEvent, render, screen } from "@testing-library/react";
import { FollowersModal } from "./FollowersModal";
import { Button, ButtonClose } from "./FollowersModal.styles";
import { FollowersModalButton } from "./FollowersModalButton";

const mockData = {
  img: "/static/media/Memoji-12.8e853bce5d91156ce10c.png",
  username: "mockusername",
};

describe("test followers modal", () => {
  it("renders header with props", () => {
    const onClick = jest.fn();
    render(
      <FollowersModal
        onClickHideModals={onClick}
        id="id"
        modal="followers"
        header="Followers"
      />
    );
    const header = screen.getByText("Followers");
    expect(header).toBeInTheDocument();
  });
  it("renders header with props 2", () => {
    const onClick = jest.fn();
    render(
      <FollowersModal
        onClickHideModals={onClick}
        id="id"
        modal="following"
        header="Following"
      />
    );
    const header = screen.getByText("Following");
    expect(header).toBeInTheDocument();
  });
  it("renders buttons with: profile image and username", () => {
    const onClick = jest.fn();
    render(
      <FollowersModalButton
        onClickHideModals={onClick}
        id="id"
        img={mockData.img}
        username={mockData.username}
      />
    );
    const username = screen.getByText("@mockusername");
    expect(username).toBeInTheDocument();
  });
  it("handles on click on a button", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  it("handles on click on a button close", () => {
    const onClick = jest.fn();
    render(<ButtonClose onClick={onClick} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
