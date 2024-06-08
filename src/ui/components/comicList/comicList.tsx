import { ComicDTO } from "@/infraestructure/comicDTO";
import { FC } from "react";
import { ComicListItem } from "../comic/comicListItem";
import styles from "./comicList.module.scss";

interface ComicListProps {
  comics: ComicDTO[];
}

export const ComicList: FC<ComicListProps> = ({ comics }) => {
  return (
    <div className={styles.container}>
      <h2>Comics</h2>
      <div className={styles.card_container}>
        {comics.length ? (
          comics.map((comic: ComicDTO) => (
            <ComicListItem key={comic.id} {...comic} />
          ))
        ) : (
          <div>No Comics </div>
        )}
      </div>
    </div>
  );
};
