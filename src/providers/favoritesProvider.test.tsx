/* eslint-disable @typescript-eslint/no-explicit-any */
import { act, render, waitFor } from "@testing-library/react";
import React from "react";
import { describe, it, expect } from "vitest";

import { FavoritesContext } from "@/context/favoritesContext";

import { FavoritesProvider } from "./favoritesProvider";

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

    act(() => {
      contextValue.onAddFavorite(mockCharacter1);
    });

    await waitFor(() => {
      expect(contextValue.filteredFavorites).toEqual(
        expect.arrayContaining([expect.objectContaining(mockCharacter1)])
      );
    });

    act(() => {
      contextValue.onAddFavorite(mockCharacter2);
    });

    await waitFor(() => {
      expect(contextValue.filteredFavorites).toEqual(
        expect.arrayContaining([
          expect.objectContaining(mockCharacter1),
          expect.objectContaining(mockCharacter2)
        ])
      );
    });

    act(() => {
      contextValue.onRemoveFavorite(mockCharacter1.id);
    });

    await waitFor(() =>
      expect(contextValue.favorites).toEqual([mockCharacter2])
    );
    expect(contextValue.filteredFavorites).toEqual([mockCharacter2]);

    const isFav = contextValue.isFavorite(mockCharacter2.id);
    expect(isFav).toBe(true);

    const isNotFav = contextValue.isFavorite(mockCharacter1.id);
    expect(isNotFav).toBe(false);

    act(() => {
      contextValue.onFilterFavorites("Thor");
    });

    await waitFor(() =>
      expect(contextValue.filteredFavorites).toEqual([mockCharacter2])
    );

    act(() => {
      contextValue.onFilterFavorites("Non-existing");
    });

    await waitFor(() => expect(contextValue.filteredFavorites).toEqual([]));

    act(() => {
      contextValue.resetFavoriteFilter();
    });

    await waitFor(() =>
      expect(contextValue.filteredFavorites).toEqual([mockCharacter2])
    );
  });
});
