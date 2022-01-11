import React, { Fragment } from "react";
import { Footer, HeroSection3, Navbar } from "../Components";
import logo from "../assets/terms&condition.jpg";
import styled from "styled-components";
import pointer from "../assets/finger.png";
import img2 from "../assets/price.jpg";
import img1 from "../assets/quality&choice.jpg";
import img3 from "../assets/convenience.jpg";

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

        {/* why users choose us ----------------------*/}
        <div className="px-20 py-10">
          <div className="text-center mb-8 ">
            <div className="font-semibold tracking-normal relative inline-block uppercase text-2xl">
              why users choose us
              <Underline className="mt-4 " />
            </div>
          </div>
          <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-1 lg:grid-rows-1 sm:grid-cols-1 sm:grid-rows-1 ">
            <div className="flex flex-col">
              <div className="flex items-center">
                <img
                  src={img1}
                  alt="quality"
                  className="float-left"
                  style={{ width: "100%", height: "200px" }}
                />
                <div className="ml-5">
                  <span
                    className="block text-base uppercase
                 text-pink-600 font-bold tracking-wider text-right"
                  >
                    quality & choice
                  </span>
                  <p className="text-right text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud.",
                  </p>
                </div>
              </div>
              <div className="flex items-center my-10">
                <div className="mr-5">
                  <span
                    className="block text-base uppercase
                 text-pink-600 font-bold tracking-widest text-left"
                  >
                    price
                  </span>
                  <p className="text-left text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud.",
                  </p>
                </div>
                <img
                  src={img2}
                  alt="quality"
                  className="float-left"
                  style={{ width: "100%", height: "200px" }}
                />
              </div>
              <div className="flex items-center">
                <img
                  src={img3}
                  alt="quality"
                  className="float-left"
                  style={{ width: "100%", height: "200px" }}
                />
                <div className="ml-5">
                  <span
                    className="block text-base uppercase
                 text-pink-600 font-bold tracking-widestsd text-right"
                  >
                      convinience
                  </span>
                  <p className="text-right text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud.",
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* why we are  best =---------------------------------*/}
        <div className="px-20 py-10" style={{ backgroundColor: "#ebebeb" }}>
          <div className="text-center mb-8 ">
          <div className="font-semibold tracking-wider relative inline-block uppercase text-2xl">
              why we are best ?
              <Underline className="mt-4 " />
            </div>
          </div>

          <div className=" grid grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-3  sm:grid-cols-1 sm:grid-rows-1 gap-3">
            <div className="flex items-center">
              <img
                src={pointer}
                alt="finger"
                className="w-auto lg:h-1/2 sm:h-1/5 h-1/6 transform rotate-45 "
              />
              <div className="mx-5">
                <span className="block text-lg font-semibold">
                  {" "}
                  Nulla porttitor accumsan tincidunt.
                </span>
                <p>
                  Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum
                  primis in faucibus orci luctus et ultrices posuere cubilia
                  Curae; Donec velit neque, auctor sit amet aliquam vel,
                  ullamcorper sit amet ligula.
                </p>
              </div>
            </div>
            <div className="flex items-center w-full">
              <img
                src={pointer}
                alt="finger"
                className="w-auto lg:h-1/2 h-1/6 sm:h-1/5 transform rotate-45 "
              />
              <div className="mx-5">
                <span className="block text-lg font-semibold">
                  {" "}
                  Nulla porttitor accumsan tincidunt.
                </span>
                <p>
                  Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum
                  primis in faucibus orci luctus et ultrices posuere cubilia
                  Curae; Donec velit neque, auctor sit amet aliquam vel,
                  ullamcorper sit amet ligula.
                </p>
              </div>
            </div>
            <div className="flex items-center w-full">
              <img
                src={pointer}
                alt="finger"
                className="w-auto lg:h-1/2 h-1/6 sm:h-1/5 transform rotate-45 "
              />
              <div className="mx-5">
                <span className="block text-lg font-semibold">
                  {" "}
                  Nulla porttitor accumsan tincidunt.
                </span>
                <p>
                  Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum
                  primis in faucibus orci luctus et ultrices posuere cubilia
                  Curae; Donec velit neque, auctor sit amet aliquam vel,
                  ullamcorper sit amet ligula.
                </p>
              </div>
            </div>
            <div className="flex items-center w-full">
              <img
                src={pointer}
                alt="finger"
                className="w-auto lg:h-1/2 h-1/6 sm:h-1/5 transform rotate-45 "
              />
              <div className="mx-5">
                <span className="block text-lg font-semibold">
                  {" "}
                  Nulla porttitor accumsan tincidunt.
                </span>
                <p>
                  Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum
                  primis in faucibus orci luctus et ultrices posuere cubilia
                  Curae; Donec velit neque, auctor sit amet aliquam vel,
                  ullamcorper sit amet ligula.
                </p>
              </div>
            </div>
            <div className="flex items-center w-full">
              <img
                src={pointer}
                alt="finger"
                className="w-auto lg:h-1/2 h-1/6 sm:h-1/5  transform rotate-45 "
              />
              <div className="mx-5">
                <span className="block text-lg font-semibold">
                  {" "}
                  Nulla porttitor accumsan tincidunt.
                </span>
                <p>
                  Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum
                  primis in faucibus orci luctus et ultrices posuere cubilia
                  Curae; Donec velit neque, auctor sit amet aliquam vel,
                  ullamcorper sit amet ligula.
                </p>
              </div>
            </div>
            <div className="flex items-center w-auto">
              <img
                src={pointer}
                alt="finger"
                className="lg:h-1/2 h-1/6 sm:h-1/5 transform rotate-45 "
              />
              <div className="mx-5">
                <span className="block text-lg font-semibold">
                  {" "}
                  Nulla porttitor accumsan tincidunt.
                </span>
                <p className="w-auto block">
                  Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum
                  primis in faucibus orci luctus et ultrices posuere cubilia
                  Curae; Donec velit neque, auctor sit amet aliquam vel,
                  ullamcorper sit amet ligula.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* how it works ---------------------------------*/}
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
    height: 4px;
    width: 40%;
    background: #d53078;
    position: absolute;
    left: calc(40% - 10%);
    bottom: 0;
  }
`;