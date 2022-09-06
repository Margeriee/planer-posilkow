import React from "react";
import styles from "./Section.module.scss";

export enum Colors {
  lightOrange = "#FFD39A", //ToDo: change to defined colors from scss (how)?
  beige = "#FFF5E1",
}

type sectionProps = {
  children: React.ReactNode;
  backgroundColor?: Colors;
};

export const Section = (props: sectionProps) => {
  const { children, backgroundColor } = props;

  return (
    <section
      className={styles.section}
      style={{ backgroundColor: backgroundColor }}
    >
      {children}
    </section>
  );
};
