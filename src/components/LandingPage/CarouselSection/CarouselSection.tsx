import { Colors, Section } from "../../Common/Section";
import { Carousel } from "./Carousel";
import styles from "./Carousel.module.scss"

import Food1 from "../../../assets/Food1.jpg";
import Food2 from "../../../assets/Food2.jpg";
import Food3 from "../../../assets/Food3.jpg";

export const CarouselSection = () => {
  return (
    <Section backgroundColor={Colors.lightOrange}>
      <div className={styles.test}>
        <Carousel>
          <img src={Food1} alt="food1" />
          <img src={Food2} alt="food2" />
          <img src={Food3} alt="food3" />
        </Carousel>
      </div>
    </Section>
  );
};
