import { FC } from "react";
import styles from "./characterListItem.module.scss";
import { DefaultHeartIcon } from "../icons/defaultHeartIcon";

interface CharacterListItemProps {
  name: string;
  image: string;
  id: string;
}

export const CharacterListItem: FC<CharacterListItemProps> = ({
  name,
  image,
  id
}) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} alt={name}></img>
      <div className={styles.separator} />
      <div className={styles.text_container}>
        <p className={styles.title}>{name}</p>
        <div>
          <DefaultHeartIcon />
        </div>
      </div>
    </div>
  );
};
