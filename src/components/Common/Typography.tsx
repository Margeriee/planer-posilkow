import React from "react";

export enum Type {
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
  children: React.ReactNode;
};

export const Typography = (props: typographyProps) => {
  const { type, children } = props;

  return <p className={type}>{children}</p>;
};
