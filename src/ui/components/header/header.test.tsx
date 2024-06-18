import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { FavoritesContext } from "@/context/favoritesContext";
import { Header } from "./header";
import { ROUTES } from "@/routes";

// Mock data for FavoritesContext
const mockFavorites = {
  favorites: [
    { id: "1", name: "Iron Man", description: "test", image: "URL" },
    { id: "2", name: "Thor", description: "Thor 2", image: "Thor URL" }
  ],
  filteredFavorites: [],
  onAddFavorite: vi.fn(),
  onRemoveFavorite: vi.fn(),
  isFavorite: vi.fn(() => true),
  onFilterFavorites: vi.fn(),
  resetFavoriteFilter: vi.fn()
};

const favoritesLinkName = mockFavorites.favorites.length.toString();

describe("Header Component", () => {
  it("renders the Marvel logo with correct alt text", () => {
    render(
      <FavoritesContext.Provider value={mockFavorites}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </FavoritesContext.Provider>
    );

    const logo = screen.getByAltText("marvel home");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "/assets/logos/marvel-logo.png");
    expect(logo).toHaveAttribute("height", "44");
  });

  it("renders the favorites link with correct text and count", () => {
    render(
      <FavoritesContext.Provider value={mockFavorites}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </FavoritesContext.Provider>
    );

    const favoritesLink = screen.getByRole("link", {
      name: favoritesLinkName
    });
    const favoritesCount = screen.getByText(
      mockFavorites.favorites.length.toString()
    );

    expect(favoritesLink).toBeInTheDocument();
    expect(favoritesCount).toBeInTheDocument();
    expect(favoritesCount).toHaveTextContent(
      mockFavorites.favorites.length.toString()
    );
  });

  it("navigates to the correct routes when links are clicked", () => {
    render(
      <FavoritesContext.Provider value={mockFavorites}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </FavoritesContext.Provider>
    );

    const homeLink = screen.getByRole("link", { name: /marvel home/i });
    const favoritesLink = screen.getByRole("link", { name: favoritesLinkName });

    expect(homeLink).toHaveAttribute("href", ROUTES.ROOT);
    expect(favoritesLink).toHaveAttribute("href", ROUTES.FAVORITES);
  });
});
