import { useContext } from "react";

import { FavoritesContext } from "@/context/favoritesContext";
import { CharacterDto } from "@/infraestructure/characterDto";

export const useFavorite = (character: CharacterDto) => {
  const { isFavorite, onAddFavorite, onRemoveFavorite } =
    useContext(FavoritesContext);

  const handleOnAddFavorite = () => {
    onAddFavorite(character);
  };

  const handleOnRemoveFavorite = () => {
    onRemoveFavorite(character.id);
  };

  const isFavorited = isFavorite(character.id);

  return {
    isFavorited,
    handleOnAddFavorite,
    handleOnRemoveFavorite
  };
};
