import { ComicList } from "@/ui/components/comicList/comicList";
import { Favorite } from "@/ui/components/favorite/favorite";

import { useDetail } from "./use-detail";

import styles from "./detail.module.scss";


export const DetailPage = () => {
  const { data, character, loading } = useDetail();

  return (
    <>
      {character ? (
        <div className={styles.banner}>
          <div className={styles.detail_content}>
            <img
              alt={character.name}
              className={styles.image}
              src={character.image}
            />
            <div className={styles.information}>
              <div className={styles.title_container}>
                <h1 className={styles.title}>{character.name}</h1>
                <Favorite character={character} />
              </div>
              <p className={styles.description}>{character.description}</p>
            </div>
          </div>
        </div>
      ) : (
        <div>Not found character</div>
      )}

      <div>{loading ? <div>loading</div> : <ComicList comics={data} />}</div>
    </>
  );
};
