import { useContext } from "react";
import { Link } from "react-router-dom";

import { FavoritesContext } from "@/context/favoritesContext";
import { ROUTES } from "@/routes";

import { FilledHearIcon } from "../icons/filledHeartIcon";

import styles from "./header.module.scss";


export const Header = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className={styles.container}>
      <Link to={ROUTES.ROOT}>
        <img
          alt="marvel home"
          height={44}
          src="/assets/logos/marvel-logo.png"
        ></img>
      </Link>
      <Link to={ROUTES.FAVORITES} className={styles.favorite_container}>
        <FilledHearIcon />
        <p className={styles.favorite_counter}>{favorites.length}</p>
      </Link>
    </div>
  );
};
