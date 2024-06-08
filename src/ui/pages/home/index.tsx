import { CharactersContext } from "@/context/charactersContext";
import { CharacterDTO } from "@/infraestructure/characterDTO";
import { CharacterListItem } from "@/ui/components/characterListItem/characterListItem";
import { useContext } from "react";
import styles from "./home.module.scss";
import { Searchbar } from "@/ui/components/searchbar/searchbar";

export const HomePage = () => {
  const { filteredCharacters } = useContext(CharactersContext);

  return (
    <div className={styles.main_container}>
      <Searchbar />
      {filteredCharacters.length > 0 ? (
        <div className={styles.characters_list}>
          {filteredCharacters.map((character: CharacterDTO) => (
            <CharacterListItem key={character.id} {...character} />
          ))}
        </div>
      ) : (
        <div>No characters found</div>
      )}
    </div>
  );
};
