import { createContext } from "react";

import { CharacterDto } from "@/infraestructure/characterDto";

export type FavoritesContextType = {
  favorites: CharacterDto[];
  filteredFavorites: CharacterDto[];
  onAddFavorite: (character: CharacterDto) => void;
  onRemoveFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  onFilterFavorites: (query: string) => void;
  resetFavoriteFilter: () => void;
};

export const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  filteredFavorites: [],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onAddFavorite: (_character) => {
    return;
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onRemoveFavorite: (_id) => {
    return;
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isFavorite: (_id) => false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onFilterFavorites: (_query) => {
    return;
  },
  resetFavoriteFilter: () => {
    return;
  }
});
