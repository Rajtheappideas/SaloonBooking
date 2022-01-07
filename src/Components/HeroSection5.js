import React from "react";
import styled from "styled-components";
import img1 from "../assets/india.jpg";
import img2 from "../assets/newyork.jpg";
import img3 from "../assets/losangeles.jpg";
import img4 from "../assets/dubai.jpg";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const data = [
  {
    img: img1,
    name: "india",
  },
  {
    img: img2,
    name: "newyork",
  },
  {
    img: img3,
    name: "los angeles",
  },
  {
    img: img4,
    name: "dubai",
  },
];
const HeroSection5 = () => {
  return (
    <div className="p-20 ">
      <div className="text-center mb-8 ">
        <div className="font-semibold tracking-wider relative inline-block uppercase text-2xl">
          popular location
          <Underline className="mt-4" />
        </div>
      </div>
      <div className="flex mx-auto">
        <div className="flex items-center justify-start">
          <button className=" hover:animate-pulse mx-2">
            <FaChevronCircleLeft size={30} />
          </button>
        </div>
        <div className="w-full grid lg:grid-cols-4 lg:grid-rows-1 md:grid-cols-2 md:grid-rows-2 gap-4 items-center ">
          {data.map((item) => (
            <div className="hover:shadow-2xl" key={item.name}>
              <img src={item.img} alt={item.name} className="w-auto h-auto" />
              <p className="text-center bg-gray-300 text-black text-base font-bold p-2">
                {item.name}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-start">
          <button className=" hover:animate-pulse mx-2">
            <FaChevronCircleRight size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection5;

const Underline = styled.p`
  ::after {
    content: "";
    height: 4px;
    width: 40%;
    background: #d53078;
    position: absolute;
    bottom: 0%;
    left: calc(40% - 10%);
  }
`;
