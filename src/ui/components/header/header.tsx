import { ROUTES } from "@/routes";
import styles from "./header.module.scss";
import { FilledHearIcon } from "../icons/filledHeartIcon";
import { useContext } from "react";
import { FavoritesContext } from "@/context/favoritesContext";

export const Header = () => {
  const { favorites } = useContext(FavoritesContext);
  return (
    <div className={styles.container}>
      <a href={ROUTES.ROOT}>
        <img
          alt="marvel home"
          height={44}
          src="/assets/logos/marvel-logo.png"
        ></img>
      </a>
      <div className={styles.favorite_container}>
        <FilledHearIcon />
        <p className={styles.favorite_counter}>{favorites.length}</p>
      </div>
    </div>
  );
};
