import { ChangeEvent, useContext } from "react";
import { SearchIcon } from "../icons/searchIcon";
import styles from "./searchbar.module.scss";
import { CharactersContext } from "@/context/charactersContext";

export const Searchbar = () => {
  const { onFilterCharacters, resetFilter, filteredCharacters } =
    useContext(CharactersContext);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value.length >= 3) {
      onFilterCharacters(value);
    }
    if (!value) {
      resetFilter();
    }
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
      <div className={styles.results}>{filteredCharacters.length} RESULTS</div>
    </div>
  );
};
