import { getAllCharacters } from "@/application/getAllCharacters";
import { CharactersContext } from "@/context/charactersContext";
import { createApiCharacaterRepository } from "@/infraestructure/apiCharacterRepository";
import { CharacterDTO } from "@/infraestructure/characterDTO";
import { FC, PropsWithChildren, useEffect, useState } from "react";

const repository = createApiCharacaterRepository();

export const CharactersProvider: FC<PropsWithChildren> = ({ children }) => {
  const [filteredCharacters, setFilteredCharacters] = useState<CharacterDTO[]>(
    []
  );

  useEffect(() => {
    async function loadHeroesCharacters() {
      const response = await getAllCharacters(repository);
      setFilteredCharacters(response);
    }
    debugger;
    loadHeroesCharacters();
  }, []);

  const onFilterCharacters = (value: string) => {
    return [];
  };
  return (
    <CharactersContext.Provider
      value={{
        filteredCharacters,
        onFilterCharacters
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};
