import { FC, useContext } from "react";
import styles from "./characterListItem.module.scss";
import { DefaultHeartIcon } from "../icons/defaultHeartIcon";
import { FavoritesContext } from "@/context/favoritesContext";
import { CharacterDTO } from "@/infraestructure/characterDTO";
import { SmallFilledHeartIcon } from "../icons/smallFIlledHearIcon";

export const CharacterListItem: FC<CharacterDTO> = (character) => {
  const { isFavorite, onAddFavorite, onRemoveFavorite } =
    useContext(FavoritesContext);

  const handleOnAddFavorite = () => {
    onAddFavorite(character);
  };

  const handleOnRemoveFavorite = () => {
    onRemoveFavorite(character.id);
  };
  return (
    <div className={styles.card}>
      <img
        className={styles.image}
        src={character.image}
        alt={character.name}
      ></img>
      <div className={styles.separator} />
      <div className={styles.text_container}>
        <p className={styles.title}>{character.name}</p>
        <div>
          {isFavorite(character.id) ? (
            <button
              className={styles.button_icon}
              onClick={handleOnRemoveFavorite}
            >
              <SmallFilledHeartIcon />
            </button>
          ) : (
            <button
              className={styles.button_icon}
              onClick={handleOnAddFavorite}
            >
              <DefaultHeartIcon />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
