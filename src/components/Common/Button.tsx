import React from "react";
import styles from "./Button.module.scss";

export enum Colors {
  grey = "grey",
  lightGrey = "lightgrey",
  darkGrey = "darkgrey",
}

type buttonProps = {
  children: string;
  backgroundColor?: Colors;
  onClick: any;
};

export const Button = (props: buttonProps) => {
  const { children, backgroundColor = Colors.lightGrey, onClick } = props;

  return (
    <button
      onClick={onClick}
      // style={{ backgroundColor: backgroundColor }}
      className={styles.button}
    >
      {children}
    </button>
  );
};
