import React from "react";
import { FaSearch } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import logo from "../assets/herologo.jpg";
import styled from "styled-components";

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
const HeroSection = () => {
  return (
    <div className="py-3 ">
      <hr
        className="  border-t-4 border-pink-500"
        style={{ color: "#d53078" }}
      />
      <div className="relative overflow-hidden">
        <img
          className="object-cover w-full h-96 opacity-90"
          src={logo}
          alt="city"
        />

        <div class="absolute  inset-y-2/4 translate-y-2/4 translate-x-2/4 text-white text-center leading-8 ">
          <MoveToRight>
            <div className="tracking-tight text-2xl mb-5">
              Search & Book appointments with Perfect Professionals for you{" "}
            </div>
          </MoveToRight>
          <MoveToLeft className="flex flex-row bg-white w-auto items-center justify-center outline-none">
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
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
