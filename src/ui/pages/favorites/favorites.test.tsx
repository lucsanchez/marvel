import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { FavoritesPage } from "./index";
import { FavoritesContext } from "@/context/favoritesContext";
import { BrowserRouter } from "react-router-dom";

// Mock data
const mockFavorites = [
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
  favorites: mockFavorites,
  onAddFavorite: vi.fn(),
  onRemoveFavorite: vi.fn(),
  isFavorite: vi.fn(() => true),
  filteredFavorites: mockFavorites,
  onFilterFavorites: vi.fn(),
  resetFavoriteFilter: vi.fn()
};

// Mock CharacterListItem component
vi.mock("@/ui/components/characterListItem/characterListItem", () => ({
  CharacterListItem: ({ name }) => <div>{name}</div>
}));

describe("FavoritesPage Component", () => {
  it("renders the search bar", () => {
    render(
      <FavoritesContext.Provider value={mockedContextValue}>
        <BrowserRouter>
          <FavoritesPage />
        </BrowserRouter>
      </FavoritesContext.Provider>
    );

    const searchBar = screen.getByPlaceholderText("SEARCH A CHARACTER...");
    expect(searchBar).toBeInTheDocument();
  });

  it("renders the list of favorite characters when favorites are present", () => {
    render(
      <FavoritesContext.Provider value={mockedContextValue}>
        <BrowserRouter>
          <FavoritesPage />
        </BrowserRouter>
      </FavoritesContext.Provider>
    );

    const ironMan = screen.getByText("Iron Man");
    const thor = screen.getByText("Thor");

    expect(ironMan).toBeInTheDocument();
    expect(thor).toBeInTheDocument();
  });

  it('renders "No Favorites found" when no favorites are present', () => {
    render(
      <FavoritesContext.Provider
        value={{ ...mockedContextValue, filteredFavorites: [] }}
      >
        <BrowserRouter>
          <FavoritesPage />
        </BrowserRouter>
      </FavoritesContext.Provider>
    );

    const noFavoritesText = screen.getByText("No Favorites found");
    expect(noFavoritesText).toBeInTheDocument();
  });
});
