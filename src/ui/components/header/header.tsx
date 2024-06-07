import { ROUTES } from "@/routes";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <div className={styles.container}>
      <a href={ROUTES.ROOT}>
        <img
          alt="marvel home"
          height={44}
          src="/assets/logos/marvel-logo.png"
        ></img>
      </a>
    </div>
  );
};
