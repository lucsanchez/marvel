import { ComicDTO } from "@/infraestructure/comicDTO";
import { FC } from "react";
import styles from "./comicListItem.module.scss";
import { isValidDate } from "@/ui/utils/dates";

export const ComicListItem: FC<ComicDTO> = (comic) => {
  const onSaleDate = isValidDate(comic.onSaleDate)
    ? new Date(comic.onSaleDate).getFullYear()
    : "";
  return (
    <div className={styles.card}>
      <img src={comic.image} alt={comic.title} className={styles.image} />
      <div className={styles.card_bottom}>
        <p className={styles.title}>{comic.title}</p>
        <span className={styles.text}>{onSaleDate}</span>
      </div>
    </div>
  );
};
