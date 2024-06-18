import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";

import { CharactersContext } from "@/context/charactersContext";

import { HomePage } from "./index";

// Mock data
const mockCharacters = [
  {
    id: "1",
    name: "Iron Man",
    description: "A wealthy industrialist and genius inventor.",
    image: "/path/to/ironman.jpg"
  },
  {
    id: "2",
    name: "Thor",
    description: "The Norse god of thunder.",
    image: "/path/to/thor.jpg"
  }
];

const mockedContextValue = {
  filteredCharacters: mockCharacters,
  loading: false,
  onFilterCharacters: vi.fn(),
  resetFilter: vi.fn(),
  getCharacter: vi.fn()
};

// Mock CharacterListItem component
vi.mock("@/ui/components/characterListItem/characterListItem", () => ({
  CharacterListItem: ({ name }) => <div>{name}</div>
}));

describe("HomePage Component", () => {
  it("renders the search bar", () => {
    render(
      <CharactersContext.Provider value={mockedContextValue}>
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      </CharactersContext.Provider>
    );

    const searchBar = screen.getByPlaceholderText("SEARCH A CHARACTER...");
    expect(searchBar).toBeInTheDocument();
  });

  it("renders loading state when loading is true", () => {
    render(
      <CharactersContext.Provider
        value={{ ...mockedContextValue, filteredCharacters: [], loading: true }}
      >
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      </CharactersContext.Provider>
    );

    const loadingText = screen.getByText("Loading");
    expect(loadingText).toBeInTheDocument();
  });

  it("renders the list of characters when not loading", () => {
    render(
      <CharactersContext.Provider value={mockedContextValue}>
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      </CharactersContext.Provider>
    );

    const ironMan = screen.getByText("Iron Man");
    const thor = screen.getByText("Thor");

    expect(ironMan).toBeInTheDocument();
    expect(thor).toBeInTheDocument();
  });

  it('renders "0 Results" message when filteredCharacters is empty and not loading', () => {
    render(
      <CharactersContext.Provider
        value={{
          ...mockedContextValue,
          filteredCharacters: [],
          loading: false
        }}
      >
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      </CharactersContext.Provider>
    );

    const noCharactersText = screen.getByText("0 RESULTS");
    expect(noCharactersText).toBeInTheDocument();
  });
});
