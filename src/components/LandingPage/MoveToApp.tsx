import React from "react";
import { Colors, Section } from "../Common/Section";
import styles from "./MoveToApp.module.scss";

export const MoveToApp = () => {
  return (
    <Section backgroundColor={Colors.grey}>
      <div className={styles.moveToApp}>
        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
        <button>Button component</button>
      </div>
    </Section>
  );
};
