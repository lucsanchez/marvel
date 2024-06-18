import { FC } from "react";

import { CharacterDto } from "@/infraestructure/characterDto";

import { Favorite } from "../favorite/favorite";

import { useCharacterListItem } from "./use-character-list-item";

import styles from "./characterListItem.module.scss";

export const CharacterListItem: FC<CharacterDto> = (character) => {
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
