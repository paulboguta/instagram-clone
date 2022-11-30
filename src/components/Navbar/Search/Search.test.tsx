import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import React, { useState } from "react";
import { SearchStyled, Results, Button, ErrorMessage } from "./Search.styles";
import { Search } from "./Search";

describe("test searchbar", () => {
  describe("test input", () => {
    it("renders input", () => {
      render(
        <BrowserRouter>
          <Search />
        </BrowserRouter>
      );
      const input = screen.getByRole("textbox");
      expect(input).toBeInTheDocument();
    });
    it("accepts input", () => {
      const onChange = jest.fn();
      render(
        <BrowserRouter>
          <SearchStyled onChange={onChange} />
        </BrowserRouter>
      );
      const input = screen.getByRole("textbox") as HTMLInputElement;
      fireEvent.change(input, { target: { value: "test input" } });
      expect(input.value).toBe("test input");
    });
    it("accepts key down press action (backspace)", () => {
      const onKeyDown = jest.fn();

      render(
        <BrowserRouter>
          <SearchStyled onKeyDown={onKeyDown} />
        </BrowserRouter>
      );
      const input = screen.getByRole("textbox") as HTMLInputElement;
      fireEvent.keyDown(input, { key: "Backspace" });
      expect(onKeyDown).toHaveBeenCalledTimes(1);
    });
  });
  describe("test search results", () => {
    it("result found handles on click event", () => {
      const onClick = jest.fn();
      render(
        <BrowserRouter>
          <Button onClick={onClick} />
        </BrowserRouter>
      );
      const button = screen.getByRole("button");
      fireEvent.click(button);
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });
});
