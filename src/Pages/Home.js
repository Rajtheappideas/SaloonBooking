import React, { Fragment } from "react";
import {
  HeroSection,
  HeroSection2,
  HeroSection3,
  HeroSection4,
  HeroSection5,
  Navbar,
  Footer,
} from "../Components/index";
const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <HeroSection />
      <HeroSection2 />
      <HeroSection3 />
      <HeroSection4 />
      <HeroSection5 />
      <Footer />
    </Fragment>
  );
};

export default Home;
