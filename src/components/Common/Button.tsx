import React from "react";
import "./Section.scss";

export enum Colors {
  grey = "grey",
  lightGrey = "lightgrey",
  darkGrey = "darkgrey",
}

type buttonProps = {
  children: string;
  backgroundColor?: Colors;
};

export const Button = (props: buttonProps) => {
  const { children, backgroundColor = Colors.lightGrey } = props;

  return (
    <button style={{ backgroundColor: backgroundColor }}>
      {children}
    </button>
  );
};
