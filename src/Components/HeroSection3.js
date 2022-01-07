import React from "react";
import styled from "styled-components";

const data = [
  {
    num: "01",
    title: "select a ",
    title2: "service",
    description:
      "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat.",
  },
  {
    num: "02",
    title: "choose a",
    title2: "location",
    description:
      "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat.",
  },
  {
    num: "03",
    title: "review our",
    title2: " pro",
    description:
      "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat.",
  },
  {
    num: "04",
    title: "pick and book ",
    title2: "your pro",
    description:
      "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat.",
  },
];
const HeroSection3 = () => {
  return (
    <div className="p-20">
      <div className="text-center mb-8 ">
        <div className="font-semibold tracking-wider relative inline-block uppercase text-2xl">
          how it works
          <Underline className="mt-4 " />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 lg:grid-rows-2 md:grid-cols-2 md:grid-rows-2 sm:grid-cols-1 sm:grid-rows-1 gap-7 p-5">
        {data.map((item) => (
          <div key={item.num}>
            <div className="flex items-center uppercase  font-semibold">
              <h1 className="text-6xl text-pink-600">{item.num}</h1>
              <p className="mx-3">
                <span className="block tracking-widest">{item.title}</span>
                <span className=" block tracking-widest">{item.title2}</span>
              </p>
            </div>
            <p className="w-auto">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection3;

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
