import { render, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { FavoritesProvider } from "./favoritesProvider";
import { FavoritesContext } from "@/context/favoritesContext";
import React from "react";

const mockCharacter1 = {
  id: "1",
  name: "Iron Man",
  description: "A wealthy industrialist and genius inventor.",
  image: "/path/to/ironman.jpg"
};
const mockCharacter2 = {
  id: "2",
  name: "Thor",
  description: "The Norse god of thunder.",
  image: "/path/to/thor.jpg"
};

describe("FavoritesProvider Component", () => {
  it("provides favorites context values", async () => {
    let contextValue: any;
    const TestComponent = () => {
      contextValue = React.useContext(FavoritesContext);
      return <div>Test</div>;
    };

    render(
      <FavoritesProvider>
        <TestComponent />
      </FavoritesProvider>
    );

    expect(contextValue.favorites).toEqual([]);
    expect(contextValue.filteredFavorites).toEqual([]);

    contextValue.onAddFavorite(mockCharacter1);

    await waitFor(() => {
      expect(contextValue.filteredFavorites).toEqual(
        expect.arrayContaining([expect.objectContaining(mockCharacter1)])
      );
    });

    contextValue.onAddFavorite(mockCharacter2);
    await waitFor(() => {
      expect(contextValue.filteredFavorites).toEqual(
        expect.arrayContaining([
          expect.objectContaining(mockCharacter1),
          expect.objectContaining(mockCharacter2)
        ])
      );
    });

    contextValue.onRemoveFavorite(mockCharacter1.id);
    await waitFor(() =>
      expect(contextValue.favorites).toEqual([mockCharacter2])
    );
    expect(contextValue.filteredFavorites).toEqual([mockCharacter2]);

    const isFav = contextValue.isFavorite(mockCharacter2.id);
    expect(isFav).toBe(true);

    const isNotFav = contextValue.isFavorite(mockCharacter1.id);
    expect(isNotFav).toBe(false);

    contextValue.onFilterFavorites("Thor");
    await waitFor(() =>
      expect(contextValue.filteredFavorites).toEqual([mockCharacter2])
    );

    contextValue.onFilterFavorites("Non-existing");
    await waitFor(() => expect(contextValue.filteredFavorites).toEqual([]));

    contextValue.resetFavoriteFilter();
    await waitFor(() =>
      expect(contextValue.filteredFavorites).toEqual([mockCharacter2])
    );
  });
});
