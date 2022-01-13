import React from "react";
import styled from "styled-components";
import img1 from "../assets/hair&beauty.jpg";
import img2 from "../assets/blush&blow.jpg";
import img3 from "../assets/universal hair.jpg";
import img4 from "../assets/spa.jpg";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import LazyLoad from "react-lazyload";

const data = [
  {
    img: img1,
    name: "Jawed Hair & Beauty",
  },
  {
    img: img1,
    name: "Blush & Blow",
  },
  {
    img: img3,
    name: "universal Hair & Beauty",
  },
  {
    img: img4,
    name: "Nevya spa",
  },
];
const HeroSection4 = () => {
  return (
    <div className="p-20" style={{ backgroundColor: "#ebebeb" }}>
      <div className="text-center mb-8 ">
        <div className="font-semibold tracking-wider relative inline-block uppercase text-2xl">
          our popular pro
          <Underline className="mt-4 " />
        </div>
      </div>

      <div className="flex mx-auto">
        <div className="flex items-center justify-start">
          <button className=" hover:animate-pulse mx-2">
            <FaChevronCircleLeft size={30} />
          </button>
        </div>
        <div className="grid lg:grid-cols-4 lg:grid-rows-1 md:grid-cols-2 md:grid-rows-2 gap-4 items-center">
          {data.map((item) => (
            <div key={item.name}>
              <LazyLoad>
                <img src={item.img} alt="pic" className="w-full h-auto" />
              </LazyLoad>
              <p className="text-center p-3 text-base font-bold bg-gray-300  text-black">
                {item.name}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-end">
          <button className="hover:animate-pulse mx-2">
            <FaChevronCircleRight size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection4;

const Underline = styled.p`
  ::after {
    content: "";
    position: absolute;
    background: #000;
    bottom: 0%;
    left: calc(40% - 10%);
    height: 4px;
    width: 40%;
  }
`;
