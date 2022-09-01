import React from "react";
import styles from "./Header.module.scss";
import { HeaderMenu } from "./HeaderMenu";

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1><p>Zaplanuj</p>Posiłek</h1>
      <HeaderMenu />
    </header>
  );
};
