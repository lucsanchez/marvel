import { FC, PropsWithChildren, useEffect, useState } from "react";

import { FavoritesContext } from "@/context/favoritesContext";
import { CharacterDto } from "@/infraestructure/characterDto";

export const FavoritesProvider: FC<PropsWithChildren> = ({ children }) => {
  const [favorites, setFavorites] = useState<CharacterDto[]>([]);
  const [filteredFavorites, setFilteredFavorites] = useState<CharacterDto[]>(
    []
  );

  useEffect(() => {
    setFilteredFavorites(favorites);
  }, [favorites]);

  const onAddFavorite = (character: CharacterDto) => {
    setFavorites([...favorites, character]);
  };

  const onRemoveFavorite = (id: string) => {
    const newFavorites = favorites.filter((fav) => fav.id !== id);
    setFavorites(newFavorites);
  };

  const isFavorite = (id: string) => {
    return favorites.some((fav) => fav.id === id);
  };

  const onFilterFavorites = (query: string) => {
    if (query) {
      const newFavorites = favorites.filter((fav) =>
        fav.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredFavorites(newFavorites);
    } else {
      resetFavoriteFilter();
    }
  };

  const resetFavoriteFilter = () => {
    setFilteredFavorites(favorites);
  };

  return (
    <FavoritesContext.Provider
      value={{
        filteredFavorites,
        favorites,
        onAddFavorite,
        onRemoveFavorite,
        isFavorite,
        onFilterFavorites,
        resetFavoriteFilter
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
