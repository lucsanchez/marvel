import { getAllCharacters } from "@/application/characters/getAll";
import { getFilteredCharactersByName } from "@/application/characters/getFilteredByname";
import { CharactersContext } from "@/context/charactersContext";
import { createApiCharacaterRepository } from "@/infraestructure/apiCharacterRepository";
import { CharacterDTO } from "@/infraestructure/characterDTO";
import { FC, PropsWithChildren, useEffect, useState } from "react";

const repository = createApiCharacaterRepository();

export const CharactersProvider: FC<PropsWithChildren> = ({ children }) => {
  const [filteredCharacters, setFilteredCharacters] = useState<CharacterDTO[]>(
    []
  );

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadHeroesCharacters() {
      const response = await getAllCharacters(repository);
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
    const response = await getAllCharacters(repository);
    setFilteredCharacters(response);
  };

  return (
    <CharactersContext.Provider
      value={{
        filteredCharacters,
        loading,
        onFilterCharacters,
        resetFilter
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};
