import { FavoritesContext } from "@/context/favoritesContext";
import { CharacterDTO } from "@/infraestructure/characterDTO";
import { FC, PropsWithChildren, useState } from "react";

export const FavoritesProvider: FC<PropsWithChildren> = ({ children }) => {
  const [favorites, setFavorites] = useState<CharacterDTO[]>([]);

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

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        onAddFavorite,
        onRemoveFavorite,
        isFavorite
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
