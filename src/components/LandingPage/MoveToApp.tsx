import React from "react";
import { Section } from "../Common/Section";
import styles from "./MoveToApp.module.scss";

export const MoveToApp = () => {
  return (
    <Section>
      <div className={styles.moveToApp}>
        <div>Text</div>
        <button>Button component</button>
      </div>
    </Section>
  );
};
