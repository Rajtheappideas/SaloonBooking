import React, { Fragment } from "react";
import { MetaTags } from "react-meta-tags";
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
      <MetaTags>
        <title>Home</title>
      </MetaTags>
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
