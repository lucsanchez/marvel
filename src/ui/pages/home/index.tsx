import { useContext } from "react";

import { CharactersContext } from "@/context/charactersContext";
import { CharacterDto } from "@/infraestructure/characterDto";
import { CharacterListItem } from "@/ui/components/characterListItem/characterListItem";
import { Searchbar } from "@/ui/components/searchbar/searchbar";

import styles from "./home.module.scss";

export const HomePage = () => {
  const { filteredCharacters, loading } = useContext(CharactersContext);

  return (
    <div className={styles.main_container}>
      <Searchbar />
      {loading ? (
        <div>Loading</div>
      ) : (
        <div className={styles.characters_list}>
          {filteredCharacters.map((character: CharacterDto) => (
            <CharacterListItem key={character.id} {...character} />
          ))}
        </div>
      )}
    </div>
  );
};
