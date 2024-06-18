/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from "react";

import { CharacterDto } from "@/infraestructure/characterDto";

export type CharactersContextType = {
  filteredCharacters: CharacterDto[];
  loading: boolean;
  onFilterCharacters: (key: string) => Promise<void>;
  resetFilter: () => Promise<void>;
  getCharacter: (id: string) => Promise<CharacterDto>;
};

export const CharactersContext = createContext<CharactersContextType>({
  filteredCharacters: [],
  onFilterCharacters: async (_value) => {
    return;
  },
  resetFilter: async () => {
    return;
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
