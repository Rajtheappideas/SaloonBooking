import React from "react";
import { FaSearch } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import logo from "../assets/herologo.jpg";
import styled from "styled-components";

const HeroSection = () => {
  return (
    <div className="pt-3 ">
      <div className="relative overflow-hidden">
        <img
          className="object-cover object-center w-full h-25% opacity-90"
          src={logo}
          alt="city"
        />

        <CenterBox className=" text-white text-center leading-8">
          <MoveToRight>
            <div className="tracking-tight text-2xl mb-5">
              Search & Book appointments with Perfect Professionals for you{" "}
            </div>
          </MoveToRight>
          <MoveToLeft className="flex flex-row bg-white w-full items-center justify-between outline-none">
            <FaSearch size={20} color="gray" className="mx-2" />
            <input
              type="text"
              className="outline-none text-black"
              placeholder="Enter a search Term"
            />
            <div>
              <span className=" opacity-40 border-r border-gray-500"></span>
            </div>
            <MdOutlineLocationOn
              size={20}
              color="gray"
              className="mx-2 animate-bounce"
            />
            <input
              type="text"
              className="outline-none text-black"
              placeholder="UK, town or postcode"
            />
            <div>
              <button
                type="button"
                className="p-1 text-white w-32 outline-none"
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
