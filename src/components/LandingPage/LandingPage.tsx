import React from "react";
import { BenefitsSection } from "./BenefitsSection";
import { Carousel } from "./CarouselSection/Carousel";
import { CarouselItem } from "./CarouselSection/CarouselItem";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { MoveToApp } from "./MoveToApp";

export const LandingPage = () => {
  return (
    <>
      <Header />
      <Carousel>
        <CarouselItem>Item 1</CarouselItem>
        <CarouselItem>Item 2</CarouselItem>
        <CarouselItem>Item 3</CarouselItem>
      </Carousel>
      <MoveToApp />
      <BenefitsSection />
      <Footer />
    </>
  );
};
