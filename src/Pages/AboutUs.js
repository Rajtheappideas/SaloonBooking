import React, { Fragment } from "react";
import { Footer, HeroSection3, Navbar } from "../Components";
import logo from "../assets/terms&condition.jpg";
import styled from "styled-components";


// const data = [
//   {icon:}
// ]
const AboutUs = () => {
  return (
    <Fragment>
      <Navbar />
      <main>
        <div className="relative">
          <img
            src={logo}
            alt="terms&confitionpic"
            className="w-full bg-auto lg:h-80 md:h-60 sm:h-40  object-cover object-bottom "
          />
          <p className="uppercase tracking-wider text-white text-4xl  font-extrabold absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4  ">
            <span>About us</span>
          </p>
        </div>
        <div className="p-16">
          <div className="text-center mb-8 ">
            <div className="font-semibold tracking-normal relative inline-block uppercase text-2xl">
              why users choose us
              <Underline className="mt-4 " />
            </div>
          </div>
        </div>
        {/* why users choose us */}
        <div></div>

        {/* why we are  best */}
        <div className="p-20" style={{ backgroundColor: "#ebebeb" }}>
          <div className="text-center mb-8 ">
            <div className="font-semibold tracking-wider relative inline-block uppercase text-2xl">
              why we are best?
              <Underline className="mt-4 " />
            </div>
          </div>

          <div className="w-full grid lg:grid-cols-2 lg:grid-rows-2 md:grid-cols-2 md:grid-rows-3 gap-6  ">
            {/* {PickYourPro.map((item) => (
              <div
                className=" border  hover:shadow-2xl relative  border-gray-300 "
                key={item.name}
              >
                <div className="p-2">
                  <div>
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-auto object-cover object-center h-auto"
                    />
                  </div>
                  <p className="text-base bg-pink-600 w-100% overflow-hidden p-3 text-center text-white  ">
                    {item.name}
                  </p>
                </div>
              </div>
            ))} */}
          </div>
        </div>
        {/* how it works */}
        <HeroSection3 />
      </main>
      <Footer />
    </Fragment>
  );
};

export default AboutUs;

const Underline = styled.p`
  ::after {
    content: "";
    width: 40%;
    height: 4px;
    background: #d53078;
    position: absolute;
    bottom: 0%;
    left: calc(40% - 10%);
  }
`;
