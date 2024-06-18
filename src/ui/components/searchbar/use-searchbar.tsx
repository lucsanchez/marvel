import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { CharactersContext } from "@/context/charactersContext";
import { FavoritesContext } from "@/context/favoritesContext";
import { ROUTES } from "@/routes";

export const useSearchbar = () => {
  const { onFilterCharacters, resetFilter, filteredCharacters } =
    useContext(CharactersContext);

  const { filteredFavorites, onFilterFavorites, resetFavoriteFilter } =
    useContext(FavoritesContext);
  const location = useLocation();

  const isFavoritePath = location.pathname === ROUTES.FAVORITES;

  useEffect(() => {
    return () => {
      if (isFavoritePath) {
        resetFavoriteFilter();
      } else {
        resetFilter();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFavoritePath]);

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
