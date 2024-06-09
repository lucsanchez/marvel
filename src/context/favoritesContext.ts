import { CharacterDTO } from "@/infraestructure/characterDTO";
import { createContext } from "react";

export type FavoritesContextType = {
  favorites: CharacterDTO[];
  filteredFavorites: CharacterDTO[];
  onAddFavorite: (character: CharacterDTO) => void;
  onRemoveFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  onFilterFavorites: (query: string) => void;
  resetFavoriteFilter: () => void;
};

export const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  filteredFavorites: [],
  onAddFavorite: (_character) => {
    return undefined;
  },
  onRemoveFavorite: (_id) => {
    return undefined;
  },
  isFavorite: (_id) => false,
  onFilterFavorites: (_query) => {
    return undefined;
  },
  resetFavoriteFilter: () => {
    return undefined;
  }
});
