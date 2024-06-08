import { ComicDTO } from "@/infraestructure/comicDTO";
import { FC } from "react";
import styles from "./comicListItem.module.scss";

export const ComicListItem: FC<ComicDTO> = (comic) => {
  return (
    <div className={styles.card}>
      <img src={comic.image} className={styles.image} />
      <div className={styles.card_bottom}>
        <p className={styles.title}>{comic.title}</p>
        <span className={styles.text}>
          {new Date(comic.onSaleDate).getFullYear()}
        </span>
      </div>
    </div>
  );
};
