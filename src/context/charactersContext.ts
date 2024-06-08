import { CharacterDTO } from "@/infraestructure/characterDTO";
import { createContext } from "react";

export type CharactersContextType = {
  filteredCharacters: CharacterDTO[];
  loading: boolean;
  onFilterCharacters: (key: string) => Promise<void>;
  resetFilter: () => Promise<void>;
  getCharacter: (id: string) => Promise<CharacterDTO>;
};

export const CharactersContext = createContext<CharactersContextType>({
  filteredCharacters: [],
  onFilterCharacters: async (_value) => {
    return undefined;
  },
  resetFilter: async () => {
    return undefined;
  },
  loading: false,
  getCharacter: (_id) => {
    return Promise.resolve({
      id: _id,
      name: "Sample Character",
      title: "",
      image: "",
      description: ""
    });
  }
});
