import { FavoritesContext } from "@/context/favoritesContext";
import { CharacterDTO } from "@/infraestructure/characterDTO";
import { FC, PropsWithChildren, useEffect, useState } from "react";

export const FavoritesProvider: FC<PropsWithChildren> = ({ children }) => {
  const [favorites, setFavorites] = useState<CharacterDTO[]>([]);
  const [filteredFavorites, setFilteredFavorites] = useState<CharacterDTO[]>(
    []
  );

  useEffect(() => {
    setFilteredFavorites(favorites);
  }, [favorites]);

  const onAddFavorite = (character: CharacterDTO) => {
    setFavorites([...favorites, character]);
  };

  const onRemoveFavorite = (id: string) => {
    const newFavorites = favorites.filter((fav) => fav.id !== id);
    setFavorites(newFavorites);
  };

  const isFavorite = (id: string) => {
    return !!favorites.find((fav) => fav.id === id);
  };

  const onFilterFavorites = (query: string) => {
    if (query) {
      const newFavorites = favorites.filter((fav) =>
        fav.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredFavorites(newFavorites);
    } else {
      setFilteredFavorites(favorites);
    }
  };

  return (
    <FavoritesContext.Provider
      value={{
        filteredFavorites,
        favorites,
        onAddFavorite,
        onRemoveFavorite,
        isFavorite,
        onFilterFavorites
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
