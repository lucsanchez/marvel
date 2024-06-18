import { Outlet } from "react-router-dom";

import { Header } from "@/ui/components/header/header";

import styles from "./layout.module.scss";

export const RootLayout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.main_content}>
        <Outlet />
      </div>
      <div>Footer</div>
    </div>
  );
};
