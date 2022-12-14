import { Button } from "../Common/Button";
import { Colors, Section } from "../Common/Section";
import { TType, Typography } from "../Common/Typography";
import styles from "./MoveToApp.module.scss";

export const MoveToApp = () => {
  return (
    <Section backgroundColor={Colors.beige}>
      <div className={styles.moveToApp}>
        <Typography type={TType.BodyF18S24}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Typography>
        <Button onClick={() => console.log("button click")}>
          Button component
        </Button>
      </div>
    </Section>
  );
};
