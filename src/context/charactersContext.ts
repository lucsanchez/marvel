import { CharacterDTO } from "@/infraestructure/characterDTO";
import { createContext } from "react";

export type CharactersContextType = {
  filteredCharacters: CharacterDTO[];
  loading: boolean;
  onFilterCharacters: (key: string) => Promise<void>;
  resetFilter: () => Promise<void>;
};

export const CharactersContext = createContext<CharactersContextType>({
  filteredCharacters: [],
  onFilterCharacters: async (_value) => {
    return undefined;
  },
  resetFilter: async () => {
    return undefined;
  },
  loading: false
});
