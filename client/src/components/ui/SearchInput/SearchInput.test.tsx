import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";
import { createRef } from "react";

import SearchInput from "../SearchInput";

describe("SearchInput component", () => {
  it("renders input with type search and default placeholder and forwards ref", () => {
    const ref = createRef<HTMLInputElement>();
    render(<SearchInput ref={ref} />);
    const input = screen.getByRole("searchbox");
    expect(input).toHaveAttribute("type", "search");
    expect(input).toHaveAttribute("placeholder", "Buscar…");
    expect(ref.current).toBe(input);
  });

  it("accepts custom placeholder", () => {
    render(<SearchInput placeholder="Pesquisar" />);
    const input = screen.getByPlaceholderText("Pesquisar");
    expect(input).toBeInTheDocument();
  });

  it("applies default md size classes", () => {
    render(<SearchInput />);
    const input = screen.getByRole("searchbox");
    expect(input).toHaveClass("h-9", "w-56", "md:w-72");
  });

  it("merges additional className", () => {
    render(<SearchInput className="my-class" />);
    const input = screen.getByRole("searchbox");
    expect(input).toHaveClass("my-class");
  });

  it("forwards arbitrary props", () => {
    render(
      <SearchInput
        data-testid="search-test"
        aria-label="Pesquisar coisas"
        maxLength={10}
      />,
    );
    const input = screen.getByTestId("search-test");
    expect(input).toHaveAttribute("aria-label", "Pesquisar coisas");
    expect(input).toHaveAttribute("maxlength", "10");
  });

  it("calls onChange when input changes", () => {
    const handleChange = jest.fn();
    render(<SearchInput onChange={handleChange} />);
    const input = screen.getByRole("searchbox");
    fireEvent.change(input, { target: { value: "abc" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("combines with snapshot", () => {
    const { asFragment } = render(
      <SearchInput
        placeholder="Snap"
        className="snap-class"
        onChange={() => {}}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
