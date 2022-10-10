import React from "react";
import styles from "./Typography.module.scss";

export enum TType {
  BodyF12S24 = "BodyF12S24", // ToDo: is not used
  BodyF14S24 = "BodyF14S24", // ToDo: is not used
  BodyF18S24 = "BodyF18S24",
  BodyF20S24 = "BodyF20S24",
}

type typographyProps = {
  type: string;
  children: string;
};

export const Typography = (props: typographyProps) => {
  const { type, children } = props;

  return <p className={styles[`${type}`]}>{children}</p>;
};
