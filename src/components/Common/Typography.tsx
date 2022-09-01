import React from "react";

export enum Type {
  HeaderF12S16 = "HeaderF12S16",
  HeaderF14S16 = "HeaderF14S16",
  HeaderF16S18 = "HeaderF16S18",
  HeaderF16S20 = "HeaderF16S20",
  HeaderF18S24 = "HeaderF18S24",
  HeaderF24S32 = "HeaderF24S32",
  BodyF8S10 = "BodyF8S10",
  BodyF10S14 = "BodyF10S14",
  BodyF11S14 = "BodyF11S14",
  BodyF12S16 = "BodyF12S16",
  BodyF14S16 = "BodyF14S16",
  BodyF16S18 = "BodyF16S18",
  BodyF16S20 = "BodyF16S20",
  BodyF18S24 = "BodyF18S24",
  BodyF20S24 = "BodyF20S24",
}

type typographyProps = {
  type: string;
  children: string;
};

export const Typography = (props: typographyProps) => {
  //ToDo: change conditions & refactor Typography
  const { type, children } = props;

  if (type === "HeaderF24S32") {
    return <h1 className={type}>{children}</h1>;
  }

  if (type === "HeaderF18S24") {
    return <h2 className={type}>{children}</h2>;
  }

  if (type === "HeaderF16S20") {
    return <h3 className={type}>{children}</h3>;
  }

  if (type === "HeaderF16S18") {
    return <h4 className={type}>{children}</h4>;
  }

  if (type === "HeaderF14S16") {
    return <h5 className={type}>{children}</h5>;
  }

  if (type === "HeaderF12S16") {
    return <h6 className={type}>{children}</h6>;
  }

  return <p className={type}>{children}</p>;
};
