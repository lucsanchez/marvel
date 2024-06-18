import { FC } from "react";

import { ComicDto } from "@/infraestructure/comicDto";
import { isValidDate } from "@/ui/utils/dates";

import styles from "./comicListItem.module.scss";

export const ComicListItem: FC<ComicDto> = (comic) => {
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
