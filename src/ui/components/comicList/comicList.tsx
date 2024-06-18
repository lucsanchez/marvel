import { FC } from "react";

import { ComicDto } from "@/infraestructure/comicDto";

import { ComicListItem } from "../comic/comicListItem";

import styles from "./comicList.module.scss";

interface ComicListProps {
  comics: ComicDto[];
}

export const ComicList: FC<ComicListProps> = ({ comics }) => {
  return (
    <div className={styles.container}>
      <h2>Comics</h2>
      <div className={styles.card_container}>
        {comics.length > 0 ? (
          comics.map((comic: ComicDto) => (
            <ComicListItem key={comic.id} {...comic} />
          ))
        ) : (
          <div>No Comics </div>
        )}
      </div>
    </div>
  );
};
