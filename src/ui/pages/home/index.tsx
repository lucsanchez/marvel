import { CharactersContext } from "@/context/charactersContext";
import { CharacterDTO } from "@/infraestructure/characterDTO";
import { useContext } from "react";

export const HomePage = () => {
  const { filteredCharacters } = useContext(CharactersContext);

  return (
    <div>
      {filteredCharacters.map((character: CharacterDTO) => (
        <div>
          {character.name}
          <img src={character.image}></img>
        </div>
      ))}
    </div>
  );
};
