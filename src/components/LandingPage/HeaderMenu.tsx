import React from "react";
import styles from "./HeaderMenu.module.scss";

export const HeaderMenu = () => {
  return (
    <ul className={styles.menu}>
      <li>Zaplanuj Posiłki</li>
      <li>Dlaczego warto?</li>
      <li>O mnie</li>
      <li>Kontakt</li>
    </ul>
  );
};
