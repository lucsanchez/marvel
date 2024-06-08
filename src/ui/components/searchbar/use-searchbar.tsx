import { CharactersContext } from "@/context/charactersContext";
import { FavoritesContext } from "@/context/favoritesContext";
import { ROUTES } from "@/routes";
import { useContext } from "react";
import { useLocation } from "react-router-dom";

export const UseSearchbar = () => {
  const { onFilterCharacters, resetFilter, filteredCharacters } =
    useContext(CharactersContext);

  const { filteredFavorites, onFilterFavorites } = useContext(FavoritesContext);
  const location = useLocation();

  const isFavoritePath = location.pathname === ROUTES.FAVORITES;

  const characters = isFavoritePath ? filteredFavorites : filteredCharacters;

  const handleOnFilterCharacters = (query: string) => {
    if (query.length >= 3) {
      onFilterCharacters(query);
    }
    if (!query) {
      resetFilter();
    }
  };

  const handleOnFilter = (query: string) => {
    if (isFavoritePath) {
      onFilterFavorites(query);
    } else {
      handleOnFilterCharacters(query);
    }
  };

  return {
    characters,
    handleOnFilter
  };
};
