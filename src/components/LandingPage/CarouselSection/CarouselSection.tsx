import { Colors, Section } from "../../Common/Section";
import { Carousel } from "./Carousel";
import { CarouselItem } from "./CarouselItem";

export const CarouselSection = () => {
  return (
    <Section backgroundColor={Colors.lightOrange}>
      <Carousel>
        {/* <CarouselItem>Item 1</CarouselItem>
        <CarouselItem>Item 2</CarouselItem>
        <CarouselItem>Item 3</CarouselItem> */}
        <div>Text 11</div>
        <div>Text 2</div>
        <div>Text 34</div>
      </Carousel>
    </Section>
  );
};
