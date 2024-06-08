import { CharacterDTO } from "@/infraestructure/characterDTO";
import { createContext } from "react";

export type CharactersContextType = {
  filteredCharacters: CharacterDTO[];
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
  }
});
