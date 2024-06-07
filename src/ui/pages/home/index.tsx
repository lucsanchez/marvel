import { CharactersContext } from "@/context/charactersContext";
import { CharacterDTO } from "@/infraestructure/characterDTO";
import { CharacterListItem } from "@/ui/components/characterListItem/characterListItem";
import { useContext } from "react";
import styles from "./home.module.scss";

export const HomePage = () => {
  const { filteredCharacters } = useContext(CharactersContext);

  return (
    <div className={styles.characters_list}>
      {filteredCharacters.map((character: CharacterDTO) => (
        <CharacterListItem key={character.id} {...character} />
      ))}
    </div>
  );
};
