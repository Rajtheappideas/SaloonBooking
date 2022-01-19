import React from "react";
import styled from "styled-components";
import img1 from "../assets/india.jpg";
import img2 from "../assets/newyork.jpg";
import img3 from "../assets/losangeles.jpg";
import img4 from "../assets/dubai.jpg";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import LazyLoad from "react-lazyload";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
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
  {
    img: img3,
    name: "los angeles",
  },
  {
    img: img1,
    name: "india",
  },
  {
    img: img2,
    name: "newyork",
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
        {/* <div className="flex items-center justify-start">
          <button className=" hover:animate-pulse mx-2">
            <FaChevronCircleLeft size={30} />
          </button>
        </div> */}
         <div className="flex justify-center items-center text-center w-full p-16">
          <Swiper
            spaceBetween={10}
            // freeMode={true}
            slidesPerView={3}
            // centeredSlides={true}
            autoplay={true}
            navigation={true}
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log("slide change")}
          >
            {data.map((item) => (
              <SwiperSlide key={item.id} className="w-full">
                <img src={item.img} alt={item.name} className="object-cover w-full h-40" />
                <p className="w-full bg-gray-300 p-1">{item.name}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* <div className="flex items-center justify-start">
          <button className=" hover:animate-pulse mx-2">
            <FaChevronCircleRight size={30} />
          </button>
        </div> */}
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