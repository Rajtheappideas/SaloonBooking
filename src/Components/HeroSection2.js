import React from "react";
import img1 from "../assets/health_and_beauty.jpg";
import img2 from "../assets/fashion.jpg";
import img3 from "../assets/tradesman.jpg";
import img4 from "../assets/beauty_salon.jpg";
import img5 from "../assets/makeupstudio.jpg";
import img6 from "../assets/Therapist.jpg";
import styled from "styled-components";
import LazyLoad from "react-lazyload";

const PickYourPro = [
  {
    img: img1,
    name: "Health and Beauty",
  },
  {
    img: img2,
    name: "Fashion",
  },
  {
    img: img3,
    name: "Tradesman",
  },
  {
    img: img4,
    name: "Beauty Salon",
  },
  {
    img: img5,
    name: "Make-Up Studio",
  },
  {
    img: img6,
    name: "Complementary Therapies",
  },
];

const HeroSection2 = () => {
  // ebebeb
  return (
    <div className="p-20" style={{ backgroundColor: "#ebebeb" }}>
      <div className="text-center mb-8 ">
        <div className="font-semibold tracking-wider relative inline-block uppercase text-2xl">
          pick your pro
          <Underline className="mt-4 " />
        </div>
      </div>

      <div className="w-full grid lg:grid-cols-3 lg:grid-rows-2 md:grid-cols-2 md:grid-rows-3 gap-6  ">
        {PickYourPro.map((item) => (
          <div
            className=" border  hover:shadow-2xl relative  border-gray-300 "
            key={item.name}
          >
            <div className="p-2">
              <div>
                <LazyLoad>
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full object-cover object-center h-60"
                  />
                </LazyLoad>
              </div>
              <p className="text-base bg-pink-600 w-100% overflow-hidden p-3 text-center text-white  ">
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default HeroSection2;

// styled components
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
