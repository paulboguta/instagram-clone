import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { NavbarButtons } from "./NavbarButtons";
import { store } from "../../../store/store";
import {
  ButtonNav,
  ButtonNavDesktop,
  ButtonNavMobile,
} from "./NavbarButtons.styles";

describe("test navbar buttons", () => {
  it("renders all 6 buttons", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <NavbarButtons />
        </Provider>
      </BrowserRouter>
    );
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(6);
  });
  it("buttons handle on click event (for each type of button)", () => {
    const onClick = jest.fn();
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ButtonNavMobile onClick={onClick} />
          <ButtonNav onClick={onClick} />
          <ButtonNavDesktop onClick={onClick} />
        </Provider>
      </BrowserRouter>
    );
    const buttons = screen.getAllByRole("button");
    buttons.map((button) => fireEvent.click(button));
    expect(onClick).toHaveBeenCalledTimes(3);
  });
});
