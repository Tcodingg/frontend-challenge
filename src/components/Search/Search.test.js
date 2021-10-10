import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import Search from "./Search";
import "@testing-library/jest-dom/extend-expect";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("search", () => {
  it("renders the search component", () => {
    render(<Search />);
  });

  it("checks whether search is working properly", () => {
    render(<Search />);
    const input = screen.getByTestId(/search/i);
    fireEvent.change(input, { target: { value: "clark" } });
    expect(input.value).toBe("clark");
  });
});
