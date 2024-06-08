import { CharacterDTO } from "@/infraestructure/characterDTO";
import { createContext } from "react";

export type FavoritesContextType = {
  favorites: CharacterDTO[];
  onAddFavorite: (character: CharacterDTO) => void;
  onRemoveFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
};

export const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  onAddFavorite: (_character) => {
    return undefined;
  },
  onRemoveFavorite: (_id) => {
    return undefined;
  },
  isFavorite: (_id) => false
});
