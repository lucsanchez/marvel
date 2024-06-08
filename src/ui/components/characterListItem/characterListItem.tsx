import { FC } from "react";
import styles from "./characterListItem.module.scss";
import { CharacterDTO } from "@/infraestructure/characterDTO";
import { useCharacterListItem } from "./use-character-list-item";
import { Favorite } from "../favorite/favorite";

export const CharacterListItem: FC<CharacterDTO> = (character) => {
  const { handleCharacterClick } = useCharacterListItem(character);

  return (
    <div className={styles.card}>
      <img
        onClick={handleCharacterClick}
        className={styles.image}
        src={character.image}
        alt={character.name}
      ></img>
      <div className={styles.separator} />
      <div className={styles.text_container}>
        <p className={styles.title}>{character.name}</p>
        <Favorite character={character} />
      </div>
    </div>
  );
};
