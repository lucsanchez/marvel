import { FavoritesContext } from "@/context/favoritesContext";
import { CharacterDTO } from "@/infraestructure/characterDTO";
import { useContext } from "react";

export const useFavorite = (character: CharacterDTO) => {
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
