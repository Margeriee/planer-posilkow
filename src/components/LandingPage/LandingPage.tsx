import React from "react";
import { BenefitsSection } from "./BenefitsSection";
import { Carousel } from "./Carousel";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { MoveToApp } from "./MoveToApp";

export const LandingPage = () => {
  return (
    <>
      <Header />
      <Carousel />
      <MoveToApp />
      <BenefitsSection />
      <Footer />
    </>
  );
};
