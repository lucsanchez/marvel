import { useDetail } from "./use-detail";
import { ComicList } from "@/ui/components/comicList/comicList";
import styles from "./detail.module.scss";
import { Favorite } from "@/ui/components/favorite/favorite";

export const DetailPage = () => {
  const { data, character, loading } = useDetail();

  return (
    <>
      <div className={styles.banner}>
        <div className={styles.detail_content}>
          <img
            width={320}
            height={320}
            src={character.image}
            alt={character.name}
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
      <div>{loading ? <div>loading</div> : <ComicList comics={data} />}</div>
    </>
  );
};
