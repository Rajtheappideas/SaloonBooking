import React from "react";
import { MetaTags } from "react-meta-tags";
import { Footer, Navbar } from "../Components";

const BarberShop = () => {
  return (
    <>
      <MetaTags>
        <title>Barber shop</title>
      </MetaTags>
      <Navbar />
      barber shop
      <Footer />
    </>
  );
};

export default BarberShop;
