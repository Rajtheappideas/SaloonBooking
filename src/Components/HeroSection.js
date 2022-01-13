import React from "react";
import { FaSearch } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import logo from "../assets/herologo.jpg";
import styled from "styled-components";
import LazyLoad from "react-lazyload";

const HeroSection = () => {
  return (
    <div className="pt-3 ">
      <div className="relative overflow-hidden">
        <LazyLoad>
          <img
            className="object-cover object-center w-full h-25% opacity-90"
            src={logo}
            alt="city"
          />
        </LazyLoad>

        <CenterBox className=" text-white text-center leading-8">
          <MoveToRight>
            <div className="tracking-tight sm:text-2xl text-xl  mb-5">
              Search & Book appointments with Perfect Professionals for you{" "}
            </div>
          </MoveToRight>
          <MoveToLeft className="flex sm:flex-row flex-col sm:bg-white lg:w-full md:w-full w-auto items-center justify-between outline-none">
            <div className="flex flex-row sm:mb-0 mb-2 relative ">
              <input
                type="text"
                className="outline-none text-black sm:border-r-2 pl-8"
                placeholder="Enter a search Term"
              />
              <FaSearch
                size={20}
                color="gray"
                className="absolute top-1.5 left-1"
              />
            </div>
            <div className="flex flex-row sm:mb-0 mb-2 relative">
              <input
                type="text"
                className="outline-none text-black pl-8"
                placeholder="UK, town or postcode"
              />
              <MdOutlineLocationOn
                size={20}
                color="gray"
                className=" absolute top-1.5 left-1 animate-bounce"
              />
            </div>
            <div>
              <button
                type="button"
                className="p-1 text-white sm:w-36 w-56 outline-none"
                style={{ backgroundColor: "#d53078" }}
              >
                SEARCH
              </button>
            </div>
          </MoveToLeft>
        </CenterBox>
      </div>
    </div>
  );
};

export default HeroSection;

// style component
const MoveToRight = styled.h1`
  animation: movetoleft;
  animation-duration: 1s;
  /* animation-delay: 3s; */
  @keyframes movetoleft {
    0% {
      opacity: 0;
      transform: translateX(-100px);
    }

    70% {
      opacity: 0.8;
      transform: translateX(8px);
    }
    100% {
      transform: translate(0);
      opacity: 1;
    }
  }
`;
const MoveToLeft = styled.div`
  animation: movetoright;
  animation-duration: 1s;
  /* animation-delay: 3s; */

  @keyframes movetoright {
    0% {
      opacity: 0;
      transform: translateX(100px);
    }

    70% {
      opacity: 0.8;
      transform: translateX(-8px);
    }
    100% {
      transform: translate(0);
      opacity: 1;
    }
  }
`;
const CenterBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
