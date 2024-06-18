import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import { Searchbar } from "./searchbar";
import * as useSearchBarHook from "./use-searchbar";

describe("Searchbar Component", () => {
  const useSearchBarSpy = vi.spyOn(useSearchBarHook, "useSearchbar");
  const mockHandleOnFilter = vi.fn();
  const mockCharacters = [
    { id: "1", name: "Iron Man", description: "description", image: "URL" },
    { id: "2", name: "Thor", description: "description", image: "URL 2" }
  ];

  beforeEach(() => {
    useSearchBarSpy.mockReturnValue({
      characters: mockCharacters,
      handleOnFilter: mockHandleOnFilter
    });
  });

  it("renders the search bar with placeholder text", () => {
    render(<Searchbar />);

    const inputElement = screen.getByPlaceholderText("SEARCH A CHARACTER...");
    expect(inputElement).toBeInTheDocument();
  });

  it("calls handleOnFilter when input value changes", () => {
    render(<Searchbar />);

    const inputElement = screen.getByPlaceholderText("SEARCH A CHARACTER...");
    fireEvent.change(inputElement, { target: { value: "Spider-Man" } });

    expect(mockHandleOnFilter).toHaveBeenCalledWith("Spider-Man");
  });

  it("displays the correct number of search results", () => {
    render(<Searchbar />);

    const resultsText = screen.getByText(`${mockCharacters.length} RESULTS`);
    expect(resultsText).toBeInTheDocument();
  });
});
