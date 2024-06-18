import { FC } from "react";

import { CharacterDto } from "@/infraestructure/characterDto";

import { DefaultHeartIcon } from "../icons/defaultHeartIcon";
import { SmallFilledHeartIcon } from "../icons/smallFIlledHearIcon";

import { useFavorite } from "./use-favorite";

import styles from "./favorite.module.scss";

interface FavoriteProps {
  character: CharacterDto;
}

export const Favorite: FC<FavoriteProps> = ({ character }) => {
  const { isFavorited, handleOnAddFavorite, handleOnRemoveFavorite } =
    useFavorite(character);
  return (
    <div>
      {isFavorited ? (
        <button
          aria-label={`favorite ${character.name}`}
          className={styles.button_icon}
          onClick={handleOnRemoveFavorite}
        >
          <SmallFilledHeartIcon />
        </button>
      ) : (
        <button
          aria-label={`unfavorite ${character.name}`}
          className={styles.button_icon}
          onClick={handleOnAddFavorite}
        >
          <DefaultHeartIcon />
        </button>
      )}
    </div>
  );
};
