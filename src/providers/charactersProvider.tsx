import { FC, PropsWithChildren, useEffect, useState } from "react";

import { getAllCharacters } from "@/application/characters/getAll";
import { getCharacterById } from "@/application/characters/getCharacterById";
import { getFilteredCharactersByName } from "@/application/characters/getFilteredByname";
import { CharactersContext } from "@/context/charactersContext";
import { createApiCharacaterRepository } from "@/infraestructure/apiCharacterRepository";
import { CharacterDto } from "@/infraestructure/characterDto";

const repository = createApiCharacaterRepository();

const getCharacter = async (id: string) => {
  const response = await getCharacterById(repository, id);
  return response;
};

export const CharactersProvider: FC<PropsWithChildren> = ({ children }) => {
  const [characters, setCharacters] = useState<CharacterDto[]>([]);
  const [filteredCharacters, setFilteredCharacters] = useState<CharacterDto[]>(
    []
  );

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadHeroesCharacters() {
      const response = await getAllCharacters(repository);
      setCharacters(response);
      setFilteredCharacters(response);
      setLoading(false);
    }
    setLoading(true);
    loadHeroesCharacters();
  }, []);

  const onFilterCharacters = async (query: string) => {
    const response = await getFilteredCharactersByName(repository, query);
    setFilteredCharacters(response);
  };

  const resetFilter = async () => {
    setFilteredCharacters(characters);
  };

  return (
    <CharactersContext.Provider
      value={{
        filteredCharacters,
        loading,
        onFilterCharacters,
        resetFilter,
        getCharacter
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};
