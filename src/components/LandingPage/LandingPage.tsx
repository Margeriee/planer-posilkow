import React from "react";
import { BenefitsSection } from "./BenefitsSection";
import { CarouselSection } from "./CarouselSection/CarouselSection";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { MoveToApp } from "./MoveToApp";

export const LandingPage = () => {
  return (
    <>
      <Header />
      <CarouselSection />
      <MoveToApp />
      <BenefitsSection />
      <Footer />
    </>
  );
};
