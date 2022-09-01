import React from "react";
import { Logo } from "../Common/Logo";
import { Type } from "../Common/Typography";
import styles from "./Header.module.scss";
import { HeaderMenu } from "./HeaderMenu";

export const Header = () => {
  return (
    <div className={styles.header}>
      <h1>
        <Logo size={Type.BodyF20S24} />
      </h1>
      <HeaderMenu />
    </div>
  );
};
