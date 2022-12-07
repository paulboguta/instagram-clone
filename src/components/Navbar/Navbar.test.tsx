import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { Navbar } from "./Navbar";
import { ButtonImg } from "./Navbar.styles";

describe("test navbar", () => {
  it("contains 7 buttons", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </BrowserRouter>
    );
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(7);
  });
  it("contains searchbar", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </BrowserRouter>
    );
    const search = screen.getByPlaceholderText("Search...");
    expect(search).toBeInTheDocument();
  });
  it("contains logo", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </BrowserRouter>
    );
    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();
  });
  it("logo handles onClick", () => {
    const onClick = jest.fn();
    render(<ButtonImg onClick={onClick} data-testid="button-logo" />);
    const button = screen.getByTestId("button-logo");
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
