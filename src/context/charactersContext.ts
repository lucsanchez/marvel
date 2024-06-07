import { CharacterDTO } from "@/infraestructure/characterDTO";
import { createContext } from "react";

export type CharactersContextType = {
  filteredCharacters: CharacterDTO[];
  onFilterCharacters: (key: string) => CharacterDTO[];
};

export const CharactersContext = createContext<CharactersContextType>({
  filteredCharacters: [],
  onFilterCharacters: (_value) => []
});
