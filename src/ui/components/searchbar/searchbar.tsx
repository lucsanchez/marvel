import { ChangeEvent } from "react";
import { SearchIcon } from "../icons/searchIcon";
import styles from "./searchbar.module.scss";
import { UseSearchbar } from "./use-searchbar";

export const Searchbar = () => {
  const { characters, handleOnFilter } = UseSearchbar();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    handleOnFilter(value);
  };

  return (
    <div className={styles.search_container}>
      <div className={styles.search_bar}>
        <span className={styles.search_icon}>
          <SearchIcon />
        </span>
        <input
          type="text"
          onChange={handleInputChange}
          placeholder="SEARCH A CHARACTER..."
        />
      </div>
      <div className={styles.results}>{characters.length} RESULTS</div>
    </div>
  );
};