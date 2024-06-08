import { FC } from "react";
import { DefaultHeartIcon } from "../icons/defaultHeartIcon";
import { SmallFilledHeartIcon } from "../icons/smallFIlledHearIcon";
import styles from "./favorite.module.scss";
import { CharacterDTO } from "@/infraestructure/characterDTO";
import { useFavorite } from "./use-favorite";

interface FavoriteProps {
  character: CharacterDTO;
}

export const Favorite: FC<FavoriteProps> = ({ character }) => {
  const { isFavorited, handleOnAddFavorite, handleOnRemoveFavorite } =
    useFavorite(character);
  return (
    <div>
      {isFavorited ? (
        <button className={styles.button_icon} onClick={handleOnRemoveFavorite}>
          <SmallFilledHeartIcon />
        </button>
      ) : (
        <button className={styles.button_icon} onClick={handleOnAddFavorite}>
          <DefaultHeartIcon />
        </button>
      )}
    </div>
  );
};
