import React, { useState } from "react";
import { Section } from "../Common/Section";
import { Type, Typography } from "../Common/Typography";
import styles from "./Carousel.module.scss";

export const Carousel = () => {
  const [index, setIndex] = useState(0);
  const table = [
    "Text1 Lorem ipsum dolor sit ameta coś tam dalej jeszcze było, ale za nic nie pamięcam co to było. Jaiś tekst po łacinie z równomiernym rozkładem słów i liter, tak by był dobry jako przykład.",
    "Text2",
    "Text3",
  ];

  const addIndexNumber = () => {
    if (index === table.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  };

  const removeIndexNumber = () => {
    if (index === 0) {
      setIndex(table.length - 1);
      return;
    }
    setIndex(index - 1);
  };

  return (
    <Section>
      <div className={styles.carousel}>
        <button onClick={() => removeIndexNumber()}>Left</button>
        <Typography type={Type.BodyF16S18}>{table[index]}</Typography>
        <button onClick={() => addIndexNumber()}>Right</button>
      </div>
    </Section>
  );
};
